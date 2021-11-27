#!/bin/zsh
docker build -t wedding-guests-spring .
docker run -it -p 8000:8080 --rm --name wedding-guests-spring wedding-guests-spring
