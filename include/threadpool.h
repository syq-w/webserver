/*************************************************************************
 @Author: syq
 @Created Time : 2022 4-р сар 28, Пү 20:23:24
 @File Name: threadpool.h
 @Description:
 	线程池类，子线程处理事务，模板类中模板参数T为任务类
 ************************************************************************/

#ifndef THREADPOOL
#define THREADPOOL

#include <cstddef>
#include <pthread.h>
#include <exception>
#include <list>
#include <iostream>

#include "locker.h"

template<typename T>
class threadpool {
public:
	//@thread_number-->线程池中线程的数量
	//@max_requests-->请求队列中最多允许等待处理的任务类数量
	threadpool(int thread_number = 8, int max_requests = 10000);
	~threadpool();
	bool append(T* request);

private:
	//工作线程运行的函数
	static void* worker(void *arg);
	void run();

private:
	//线程的数量
	int m_thread_number;

	//线程池数组，大小为m_thread_number
	pthread_t *m_thread;

	//请求队列中最多允许等待处理的任务类数量
	int m_max_requests;

	//请求队列
	std::list<T*> m_workqueue;

	//保护请求队列的互斥锁
	locker m_queuelocker;

	//是否有任务需要处理
	sem m_queuestat;

	//是否结束线程
	bool m_stop;
};

template<typename T>
threadpool<T>::threadpool(int thread_number, int max_requests)
	:m_thread_number(thread_number)
	,m_max_requests(max_requests)
	,m_stop(false)
	,m_thread(NULL) {
		
	if(thread_number <= 0 || max_requests <= 0)
		throw std::exception();
	
	m_thread = new pthread_t[m_thread_number];
	if(!m_thread)
		throw std::exception();

	//创建线程并设置为脱离线程
	for(int i = 0; i < thread_number; ++i) {
		std::cout << "creat the " << i << "th thread" << std::endl;
		if(pthread_create(m_thread + i, NULL, worker, this) != 0) {
			delete [] m_thread;
			throw std::exception();
		}

		if(pthread_detach(m_thread[i])) {
			delete [] m_thread;
			throw std::exception();
		}		
	}
}

template<typename T>
threadpool<T>::~threadpool() {
	delete [] m_thread;
	m_stop = true;
}

template<typename T>
bool threadpool<T>::append(T *request) {
	//请求队列被所有线程共享
	m_queuelocker.lock();
	if(m_workqueue.size() > m_max_requests) {
		m_queuelocker.unlock();
		return false;
	}

	m_workqueue.push_back(request);
	m_queuelocker.unlock();
	m_queuestat.post();
	return true;
}

template<typename T>
void * threadpool<T>::worker(void* arg) {
	threadpool *pool = (threadpool*)arg;
	pool->run();
	return pool;
}

template<typename T>
void threadpool<T>::run() {
	while(!m_stop) {
		m_queuestat.wait();
		m_queuelocker.lock();
		
		if(m_workqueue.empty()) {
			m_queuelocker.unlock();
			continue;
		}
		T* request = m_workqueue.front();
		m_workqueue.pop_front();
		m_queuelocker.unlock();
		if(!request)
			continue;

		request->process();
	}
}

#endif
