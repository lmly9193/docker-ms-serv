# ms-serv

```sh
docker pull openjdk:8-jdk-alpine
```

```sh
docker run -e TZ="Taipei" -v d:\ms-serv:/maplestory -p 8484:8484 -p 8596:8596 -p 8571-8590:8571-8590 --name ms-serv -it -w /maplestory openjdk:8-jdk-alpine ./serv.sh
```

```sh
docker run -e TZ="Taipei" -v d:\ms-serv:/maplestory -p 8484:8484 -p 8596:8596 -p 8571-8590:8571-8590 --name ms-serv -d openjdk:8-jdk-alpine
docker exec -it -w /maplestory ms-serv ./serv.sh
```

```sh
docker-compose up -d
```

## 編碼

由於台服客戶端編碼為Big5，所以資料庫、腳本皆為Big5，匯入或修改時請注意。
