# V2Ray-WebSocket-Docker

## 有问题或者有想要加的功能可以在issus提交或者可以加入下方的电报群
[点击此链接加入电报群](https://t.me/joinchat/L68JqRQMroH78jqLI1HdcA)

# 自定义部署【脚本】
- 使用前提是，已经安装完毕Docker并成功启动
- 适用于自定义配置文件
## 部署步骤
## 1.git pull git@github.com:mack-a/V2Ray-WebSocket-Docker.git
## 2.进入项目目录，执行下方命令
```
sh rebuild.sh vwd
```
## 3.示例
- 需要手动改一下域名的部分
- 如果有自定义配置需要修改相关的内容
```
vmess://eyJwb3J0IjoiNDQzIiwicHMiOiJxaXU0X2ZyZWUwMUB2MnJheS5jb20iLCJ0bHMiOiJ0bHMiLCJpZCI6ImNjNjg1MzBlLTBjMjMtMTJiNS1mNjE2LTY4Mzk2OTdmZjczZiIsImFpZCI6IjY0IiwidiI6IjIiLCJob3N0IjoiIiwidHlwZSI6Im5vbmUiLCJwYXRoIjoiXC9tYWluIiwibmV0Ijoid3MiLCJhZGQiOiJ0ZXN0LnFpdTQubWwifQ==
```

# 手动部署
## 1.打包
```
docker build -t vwd .
```

## 2.运行
```
docker run -d -p 80:80 vwd
```

## 3.示例
- 需要手动改一下域名的部分
- 如果有自定义配置需要修改相关的内容
```
vmess://eyJwb3J0IjoiNDQzIiwicHMiOiJxaXU0X2ZyZWUwMUB2MnJheS5jb20iLCJ0bHMiOiJ0bHMiLCJpZCI6ImNjNjg1MzBlLTBjMjMtMTJiNS1mNjE2LTY4Mzk2OTdmZjczZiIsImFpZCI6IjY0IiwidiI6IjIiLCJob3N0IjoiIiwidHlwZSI6Im5vbmUiLCJwYXRoIjoiXC9tYWluIiwibmV0Ijoid3MiLCJhZGQiOiJ0ZXN0LnFpdTQubWwifQ==
```

# 托管部署【无法自定义文件】
## 1.拉取项目
```
docker pull mackq/v2ray-websocket-docker
```

## 2.启动
```
docker run -d -p 80:80 mackq/v2ray-websocket-docker
```

## 3.示例
- 需要手动改一下域名的部分
- 如果有自定义配置需要修改相关的内容
```
vmess://eyJwb3J0IjoiNDQzIiwicHMiOiJxaXU0X2ZyZWUwMUB2MnJheS5jb20iLCJ0bHMiOiJ0bHMiLCJpZCI6ImNjNjg1MzBlLTBjMjMtMTJiNS1mNjE2LTY4Mzk2OTdmZjczZiIsImFpZCI6IjY0IiwidiI6IjIiLCJob3N0IjoiIiwidHlwZSI6Im5vbmUiLCJwYXRoIjoiXC9tYWluUGF0aCIsIm5ldCI6IndzIiwiYWRkIjoidGVzdC5xaXU0Lm1sIn0=
```

# [Docker托管地址](https://hub.docker.com/repository/docker/mackq/v2ray-websocket-docker)
