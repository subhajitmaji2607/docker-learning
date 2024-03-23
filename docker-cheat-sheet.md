## What is a Docker image?
A Docker image serves as the foundation for executing code within a Docker container. It encapsulates all necessary dependencies and configurations within a single file. The file extension for a Docker image is .Dockerfile.

## What is a Docker container?
A container provides a segregated environment for your code, facilitating the execution of images.

## Docker commands
### Containers
    //Creating and running an container
    $ docker run <image_name>

    //Display all containers which is in a running state
    $ docker ps

    //Display all containers
    $ docker ps -a or docker ps --all

    //Delete an container
    $ docker rm <container_name or container_id>

    //Remove all stopped containers once
    $ docker system prune

    //Retrieve logs from a container
    $ docker logs <container_id>

    //Stop docker container
    $ docker stop <container_id> or docker kill <container_id>

    //Runs a new command in a running container
    $ docker exec -it <container_id> <command>

****docker run** command is a combination of **docker create** and **docker start**.
1. **docker create <image_name>**
2. **docker start <container_id>** OR **docker start -a <container_id>**

For monitoring the container's output in the terminal, use **"-a"** flag.

For restarting a stopped container use docker start commands.

Run **docker exec -it <container_id> sh** to enter into container's terminal.

### Images
    //Display all local images
    $ docker images

    //Delete an image
    $ docker rmi <image_name or image_id>

    //Tagging an images
    **Tag name by convention: <docker_hub_name/project_name:version>
    $ docker build -t <image_name> .

    //Port mapping
    $ docker run -p <route_incoming_req_to_this_port>:<container_port> <image_id>

### Docker Compose
    
## Resources
- [how-to-install-docker-on-ubuntu](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

- [how-to-uninstall-docker-on-ubuntu](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine)

- [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/)

- [markdown-cheat-sheet](https://www.markdownguide.org/cheat-sheet/)

