CONTAINERID=`docker ps|grep -v grep|grep $1|awk '{print $1}'`;
docker stop ${CONTAINERID} && docker rm ${CONTAINERID};
docker image rm $1;
