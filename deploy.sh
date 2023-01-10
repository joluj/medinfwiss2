#!/usr/bin/env bash

yarn nx build app
rsync -rvh ./dist/apps/app/ sa63pata@cip2g6.cip.cs.fau.de:/home/cip/2017/sa63pata/.www/medinfwiss2 --delete
