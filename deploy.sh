#!/bin/bash

RESOURCE_GROUP=$1
VM_NAME=$2
IMAGE=$3

# Login no ACR
az acr login --name myuniquecontainer2024

# Pull da nova imagem
docker pull $IMAGE

# Parar o contêiner antigo
docker stop $(docker ps -q --filter "ancestor=$IMAGE")

# Remover o contêiner antigo
docker rm $(docker ps -a -q --filter "ancestor=$IMAGE")

# Executar o novo contêiner
docker run -d -p 8100:8100 $IMAGE
