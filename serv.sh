#!/bin/sh
export CLASSPATH=.:dist/*:dist/lib/*
java -Xmx1024M -server -Dnet.sf.odinms.wzpath=./wz/ -Dfile.encoding=UTF-8 server.Start
read -p "Press enter to continue"