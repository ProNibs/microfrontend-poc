#!/bin/zsh
docker build -t wedding-base-react .
docker run -it -p 8000:3000 -v ${PWD}:/app --rm --name wedding-base-react wedding-base-react
