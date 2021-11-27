#!/bin/zsh

kind create cluster --config ./kind-config.yaml
# Cluster name is test-k8s

# Add Ambassador Ingress
kubectl apply -f https://github.com/datawire/ambassador-operator/releases/latest/download/ambassador-operator-crds.yaml

kubectl apply -n ambassador -f https://github.com/datawire/ambassador-operator/releases/latest/download/ambassador-operator-kind.yaml
kubectl wait --timeout=180s -n ambassador --for=condition=deployed ambassadorinstallations/ambassador


# To delete cluster:
# kind delete cluster --name test-k8s