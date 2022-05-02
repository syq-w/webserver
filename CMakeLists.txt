
cmake_minimum_required(VERSION 3.16)

project(webserver)

include_directories(${PROJECT_SOURCE_DIR}/include)

#set(SOURCE ${PROJECT_SOURCE_DIR}/source)

aux_source_directory(${PROJECT_SOURCE_DIR}/source SOURCE)

set(CMAKE_CXX_FLAGS ${CMAKE_CXX_FLAGS} "-pthread")

add_executable(${PROJECT_NAME} main.cpp ${SOURCE})
