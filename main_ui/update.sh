#!/bin/sh
echo Run the following once inside terminal
echo npm i -g npm-check-updates
echo ncu -u
docker run -it -v ${PWD}:/app --entrypoint='/bin/sh' wedding-base-react
