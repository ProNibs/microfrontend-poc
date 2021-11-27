# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

This is meant to be the main entrypoint for our microservices app that utilizes React Micro Front End paradigm.

Main thing to worry about is importing the environment variables with the correct hostnames.

Can run locally with docker via `./run_local.sh`

## Kubernetes Install

Assumptions is you're running Ambassador and kind and have setup kubectl context to use kind.

Run `./run_kubernetes.sh`

## Update npm packages

Run and following the directions:
`./update.sh`
