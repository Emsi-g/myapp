#!/bin/bash
systemctl start docker
aws ecr get-login-password --region ap-northeast-3 | docker login --username AWS --password-stdin 083341655278.dkr.ecr.ap-northeast-3.amazonaws.com
docker pull 083341655278.dkr.ecr.ap-northeast-3.amazonaws.com/mc-aws-codepipeline:latest
docker run -d -p 80:80 --name test-docker 083341655278.dkr.ecr.ap-northeast-3.amazonaws.com/mc-aws-codepipeline:latest
