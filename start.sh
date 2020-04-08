#!/usr/bin/env bash
/usr/src/v2ray/v2ray -config /usr/src/v2ray/config_ws_tls.json &
/usr/src/trojan/trojan /usr/src/trojan/Trojan.json &
sed -i "s/mainPath/$mainPath/g" `grep 'mainPath' -rl /etc/nginx/nginx.conf`
sed -i "s/mainPath/$mainPath/g" `grep 'mainPath' -rl /usr/src/v2ray/config_ws_tls.json`

/usr/src/v2ray/v2ray -config /usr/src/v2ray/config_ws_tls.json &
# /usr/bin/node /usr/src/node/server.js &
# /usr/bin/crontab /usr/src/node/traffic.cron
# /usr/sbin/crond
nginx -g 'daemon off;'
