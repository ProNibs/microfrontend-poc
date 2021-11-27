#!/bin/zsh

# Build the image
docker build -t wedding-base-react .
# Assumes you running kind.
kind load docker-image wedding-base-react 
# Apply folder now
kubectl apply -f k8s/