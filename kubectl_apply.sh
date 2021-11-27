#!/bin/zsh

# Build containers
docker build -t wedding-aboutus-go ./about_us_go
docker build -t wedding-front ./main_ui

# Load images to Kind
# My kind cluster is named test-k8s
kind load docker-image wedding-aboutus-go --name test-k8s
kind load docker-image wedding-front --name test-k8s

# Kubernetes Apply YAMLs
kubectl apply -f ./about_us_go/k8s/
kubectl apply -f ./main_ui/k8s/



