# WebSwipe项目简介

2023七牛云1024编程马拉松项目，一款基于七牛云相关产品开发的Web短视频应用。

# demo视频

demo视频见当前仓库中的`demo视频.mp4`。

# 功能

🌟 亮点功能

- 用户
  - 注册🌟
  - 登录🌟
  - 登录校验🌟
- 视频
  - 视频加载
  - 视频播放
  - 内容分类
  - 视频切换
  - 视频上传🌟
    - 选择封面🌟
    - 视频上传🌟
  - 获取用户上传的视频🌟
  - 获取用户互动的视频🌟
  - 视频搜索🌟
- 用户交互
  - 点赞/取消点赞视频🌟
  - 收藏/取消收藏视频🌟

# 技术栈

前端：

- 开发框架：React、umi
- 组件库：Ant Design、Video.js
- 其他：Axios、dva、Lodash、mdb

后端：

- 开发框架：Spring Boot、Mybatis-Plus
- 数据存储：七牛云云存储、MySQL
- 登录校验：JWT、Spring Security、Redis

软件：

- 开发：IDEA、VSCode、
- 接口测试：Postman
- 数据存储：MySQL Workbench、redisinsight

# 快速上手

环境：

- 运行系统：Windows11
- 后端环境：JDK1.8
- 前端环境：Node.js16.16.0

## 后端

1. 向MySQL中导入web_swipe.sql文件MySQL（sql文件见：https://github.com/zadarmo/WebSwipeService ）
2. 导入WebSwipeSerivce项目到IDEA或其他编译器，
3. 修改application.yml文件中的数据库相关配置
4. 下载maven依赖
5. 点击运行，启动项目

## 前端

1. 导入WebSwipeUI到VSCode或编译器/编辑器
2. 终端执行`npm install`，安装依赖 
3. 终端执行`npm run dev`，启动项目


