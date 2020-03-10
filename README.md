# V2Ray-WebSocket-Docker

## 有问题或者有想要加的功能可以在issus提交或者可以加入下方的电报群
[点击此链接加入电报群](https://t.me/joinchat/L68JqRQMroH78jqLI1HdcA)

- [安装Docker](#--docker)
  * [1.Debian](#1debian)
  * [2.CentOS](#2centos)
- [自定义部署【脚本】](#自定义部署脚本)
  * [部署步骤](#部署步骤)
  * [1.git pull git@github.com:mack-a/V2Ray-WebSocket-Docker.git](#1git-pull-gitgithubcommack-av2ray-websocket-dockergit)
  * [2.进入项目目录，执行下方命令](#2进入项目目录执行下方命令)
  * [3.示例](##3示例)
- [手动部署](#手动部署)
  * [1.打包](#1打包)
  * [2.运行](#2运行)
  * [3.示例](#3示例-1)
- [托管部署【无法自定义文件】](#托管部署无法自定义文件)
  * [1.拉取项目](#1拉取项目)
  * [2.启动](#2启动)
  * [3.示例](#3示例2)
- [docker托管地址](#docker托管地址)

# 安装Docker
## 1.Debian
- 1.更新包列表
```
sudo apt update
```
- 2.安装必备包
```
sudo apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common
```
- 3.将官方Docker存储库的GPG密钥添加到系统
```
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
```

- 4.将Docker存储库添加到APT源
```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
```
- 5.确保要从Docker repo而不是默认的Debian repo安装
```
apt-cache policy docker-ce

#

docker-ce:
  Installed: (none)
  Candidate: 18.06.1~ce~3-0~debian
  Version table:
     18.06.1~ce~3-0~debian 500
        500 https://download.docker.com/linux/debian stretch/stable amd64 Packages

请注意，未安装docker-ce ，但安装的候选者来自Debian 9的Docker存储库（ stretch ）
```
- 6.安装Docker
```
sudo apt install docker-ce
```

- 7.守护进程&开机自启&启动
```
# 查看状态
sudo systemctl status docker

# 开机自启动
sudo systemctl enable docker

# 启动docker
sudo systemctl start docker

# 关闭docker
sudo systemctl stop docker
```

## 2.CentOS
- 1.卸载旧版
```
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```
- 2.安装Docker Engine-Community。新主机上首次安装Docker Engine-Community之前，需要设置Docker仓库。之后可以从仓库更新和安装Docker。安装所需软件包。
```
sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

- 3.设置稳定仓库
```
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

- 4.安装Docker Engine-Community和containerd（默认最新）
```
sudo yum install docker-ce docker-ce-cli containerd.io
```

- 5.守护进程&开机自启&启动
```
# 查看状态
sudo systemctl status docker

# 开机自启动
sudo systemctl enable docker

# 启动docker
sudo systemctl start docker

# 关闭docker
sudo systemctl stop docker
```

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
