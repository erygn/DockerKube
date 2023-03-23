# Deploiement

## DockerFile

docker build -t node-kube:v1 --target prod .

Lancer sur Docker
docker run -d -p 8000:8000 --name node-kube node-kube

## Kube

kubectl apply -f kube.yaml

Mise à jour image (nouvelle route GET /update/v2)
kubectl set image deployment/node node-site=node-kube:v3

Revenir en arrière (pour bien voir qu'on a plus accès à /update/v2)
kubectl rollout undo deployment/node

Valider la mise à jour
kubectl rollout status deployment/node

Supprimer Kube
kubectl delete -f kube.yaml

## Helm

helm create node-helm

helm install node-helm node-helm

helm upgrade --install node-helm node-helm

helm uninstall node-helm