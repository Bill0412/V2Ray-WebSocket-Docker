FROM centos
RUN mkdir -p /usr/src/v2ray/ \
    && mkdir -p /tmp/v2ray/ \
    && mkdir -p /usr/src/node/ \
    && yum install wget nginx unzip nodejs crontabs -y \
    && rm -rf /etc/nginx/nginx.conf

ARG SERVICETYPE=gcp
ARG mainPath=main
ENV mainPath $mainPath
ENV SERVICETYPE $SERVICETYPE
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo Asia/Shanghai > /etc/timezone
COPY ["./config/config_ws_tls.json","/usr/src/v2ray/"]
COPY ["./config/V2Ray.zip","/tmp/v2ray/"]
COPY ["./config/nginx.conf","start.sh","/etc/nginx/"]
COPY index /usr/share/nginx/html/
COPY ["service","/usr/src/node/"]
RUN unzip -d /tmp/v2ray/ /tmp/v2ray/V2Ray.zip \
        && rm -rf /usr/share/nginx/html/index.html \
        && mv /tmp/v2ray/v2ray /usr/src/v2ray/v2ray \
        && mv /tmp/v2ray/v2ctl /usr/src/v2ray/v2ctl \
        && rm -rf /tmp/v2ray/
WORKDIR /usr/src/node/
RUN npm install

EXPOSE 80
CMD ["/etc/nginx/start.sh"]
