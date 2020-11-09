#!/bin/bash

echo What should the version be?
read VERSION

docker build -t puste/posteet:$VERSION .
docker push puste/posteet:$VERSION
ssh root@138.68.101.143 "docker pull puste/posteet:$VERSION && docker tag puste/posteet:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"