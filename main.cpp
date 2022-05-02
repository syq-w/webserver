/*************************************************************************
 @Author: syq
 @Created Time : 2022 4-р сар 29, Ба 16:31:36
 @File Name: main.cpp
 @Description:
 	主线程：实现webserver

	通过wget ip:port 进行测试
 ************************************************************************/

#include <arpa/inet.h>
#include <asm-generic/errno-base.h>
#include <asm-generic/socket.h>
#include <csignal>
#include <cstddef>
#include <cstdlib>
#include <iostream>
#include <netinet/in.h>
#include <sys/socket.h>
#include <unistd.h>
#include <stdlib.h>
#include <errno.h>
#include <fcntl.h>
#include <sys/epoll.h>
#include <string.h>
#include <signal.h>
#include <assert.h>

#include "include/locker.h"
#include "include/threadpool.h"
#include "include/http_conn.h"

using namespace std;

#define MAX_FD 65536 //最大的文件描述符个数
#define MAX_EVENT_NUMBER 10000 //监听的最大的时间数量

//向epoll中添加要监听的文件描述符
extern void addfd(int epollfd, int fd, bool one_shot);
//从epoll中移除文件描述符
extern void remove(int epollfd, int fd);
//添加信号捕捉
void addsig(int sig, void(handler)(int)) {
	struct sigaction sa;
	memset(&sa, '\0', sizeof(sa));
	sa.sa_handler = handler;
	sigfillset(&sa.sa_mask);
	//assert(sigaction(sig, &sa, NULL));
	sigaction(sig, &sa, NULL);
}

int main(int argc, char* argv[]) {
	
	if(argc <= 1) {
		std::cout << "Missing declaration of port number!!!" << std::endl;
	   return 1;	
	}

	int port = atoi(argv[1]);	
	addsig(SIGPIPE, SIG_IGN);
	
	threadpool<http_conn> *pool = NULL;
	try {
		pool = new threadpool<http_conn>;
	} catch(...) {
		return 1;
	}

	http_conn *users = new http_conn[MAX_FD];	
	
	int listenfd = socket(PF_INET, SOCK_STREAM, 0);
	
	int ret = 0;
	struct sockaddr_in address;
	address.sin_addr.s_addr = INADDR_ANY;
	address.sin_family = AF_INET;
	address.sin_port = htons(port);

	//端口复用
	int reuse = 1;
	setsockopt(listenfd, SOL_SOCKET, SO_REUSEADDR, &reuse, sizeof(reuse));
	ret = bind(listenfd, (struct sockaddr*)&address, sizeof(address));
	ret = listen(listenfd, 5);	


	//创建epoll对象和事件数组
	epoll_event event[MAX_EVENT_NUMBER];
	int epollfd = epoll_create(5);
	addfd(epollfd, listenfd, false);
	http_conn::m_epollfd = epollfd;

	while(true) {
		int number = epoll_wait(epollfd, event, MAX_EVENT_NUMBER, -1);
		if(number < 0 && errno != EINTR) {
			cout << "epoll failure!!!" << endl;
			break;
		}

		for(int i = 0; i < number; ++i) {
			int sockfd = event[i].data.fd;

			//有新用户请求连接
			if(sockfd == listenfd) {
				struct sockaddr_in client_address;
				socklen_t client_addrlen = sizeof(client_address);
				int connfd = accept(listenfd, (struct sockaddr*)&client_address, &client_addrlen);

				if(connfd < 0) {
					cout << "errno is: " << errno << endl;
					continue;
				}

				if(http_conn::m_user_count >= MAX_FD) {
					close(connfd);
					continue;
				}

				users[connfd].init_conn(connfd, client_address);
			} else if(event[i].events & (EPOLLRDHUP | EPOLLHUP | EPOLLERR)) {
				users[sockfd].close_conn();
			} else if(event[i].events & EPOLLIN) {
				if(users[sockfd].read()) {
					pool->append(users + sockfd);
				} else {
					users[sockfd].close_conn();
				}
			} else if(event[i].events & EPOLLOUT) {
				if(!users[sockfd].write()) {
					users[sockfd].close_conn();
				}
			}
		}
	}

	close(epollfd);
	close(listenfd);
	delete [] users;
	delete pool;
	
	return 0;
}
