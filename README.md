# Winprovit Challenge

## 💻 Prerequisites

* You need the maven installed in your machine because i had some problems with communicate between my application container and redis container, i can explain better in a call.
* You need the npm
* You need the docker

## 🚀 Run project on Windows

* Create the redis container (You can choice the container namer, but you must run in 6379 port)
```
<docker run --name redis-docker -p 6379:6379 redis:latest>
```

* The redis container already running when you run above command, but if you need run redis container again, you can run:
```
<docker start redis-docker>
```

* Navigate to the /winprovit-back folder
```
<cd winprovit-back>
```

* Run backend project
```
<mvn spring-boot:run>
```

* Run frontend project
1. Navigate to the /winprovit-front folder
```
<cd winprovit-front>
```
2. Install dependencies
```
<npm i> or <npm install>
```
3. Run the project
```
<npm start>
```
