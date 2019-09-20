# FlashCardApp

As computer professionals, we need to read a lot but we can't remember them all. This app can be used to create flash cards while reading a topic. It's a basic app where each flash card will contain a question and answer (no card flipping is required).

# Installation

This app supports docker. It can be either run on docker and IISExpress/krestel webserver.

In order to run it in docker

- Install docker from [here](https://docs.docker.com/docker-for-windows/) and follow the steps
- Share C:\ drive for volume mounting

# Run in Docker mode

This app uses docker compose as it needs to start two containers, one for the the app and other for the sql server container.

You can either choose to open the code in Visual studio and set docker-compose project as start up project and run the app or you can

- open up a cmd and cd to the directory where you cloned the app
- run `docker-compose up`

I have also uploaded a built image to docker hub which you can grab using below command:

```
docker pull sadiaboksh/myflashcard:latest
```

and then run `docker-compose up`. You need the docker-compose_github_image.yaml from the repo and copy it to a different dierctory and open cmd in that dierctory.

Once the app is up and running in docker, you can shut it down by enter Ctrl+C in the cmd
To restart the alrady installed app run `docker-compose start` and to stop it `docker-compose stop`  

# App Demo

TODO: add some images 
# Technlogies used

- docker
- Asp.net Core 2.1
- EF Core 2.1
- Angular 8+
- Serilog
- Seq

# How Code Works

Add core concepts of the app.

# Considerations

This is a side project and pretty small. My intension was to learn docker, so I did not pay much attention on the project architecture (e.g. onion architecture which I will be working on next).
This app implements basic architecture pattern i.e. DataLayer, BusinessLayer and UI layer.

# Further reading

- [EF Core in Docker](https://www.c-sharpcorner.com/article/entity-framework-core-in-docker-container-part-ii-sqlite/)
- [Docker cheatsheet](cheetsheet github url)
- [Serlog Asp.Net Core](https://github.com/serilog/serilog-aspnetcore)
- [Serilog from app config][https://itnext.io/loggly-in-asp-net-core-using-serilog-dc0e2c7d52eb]
 