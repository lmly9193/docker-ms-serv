#!/bin/bash
export CLASSPATH=.:dist/*
java -Xmx512M -server -Dnet.sf.odinms.wzpath=./wz/ server.Start
read -p "Press enter to continue"