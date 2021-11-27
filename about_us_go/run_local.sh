#!/bin/zsh
docker build --no-cache -t wedding-aboutus-go .
docker run -it -p 8081:8080 --rm --name wedding-aboutus-go wedding-aboutus-go
