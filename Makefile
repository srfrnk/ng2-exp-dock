all:
	pass
	
setup:
	cd api && npm i
	cd client && npm i
	
build:
	docker-compose -f docker-compose/docker-compose.prod.json -f docker-compose/docker-compose.dev.json build

up:
	docker-compose -f docker-compose/docker-compose.prod.json -f docker-compose/docker-compose.dev.json up

up-no-dev:
	docker-compose -f docker-compose/docker-compose.prod.json up
	
down:
	docker-compose -f docker-compose/docker-compose.prod.json -f docker-compose/docker-compose.dev.json kill

test:
	cd client && npm test
	
create-cluster:
	gcloud container clusters create k8s-cluster --zone us-east1-b --num-nodes 1
	gcloud container clusters get-credentials k8s-cluster --zone us-east1-b

deploy-build:
	docker tag dockercompose_client gcr.io/$$DEVSHELL_PROJECT_ID/client
	docker tag dockercompose_api gcr.io/$$DEVSHELL_PROJECT_ID/api
	gcloud docker -- push gcr.io/$$DEVSHELL_PROJECT_ID/client
	gcloud docker -- push gcr.io/$$DEVSHELL_PROJECT_ID/api
	sed -i s/DEVSHELL_PROJECT_ID/$$DEVSHELL_PROJECT_ID/ k8s/api.deployment.json
	sed -i s/DEVSHELL_PROJECT_ID/$$DEVSHELL_PROJECT_ID/ k8s/client.deployment.json

deploy-cluster:
	kubectl apply -f k8s/api.deployment.json
	kubectl apply -f k8s/api.service.json
	while [ "$$(kubectl -o=jsonpath={@.status.loadBalancer.ingress[0].ip} get svc api --ignore-not-found)" == "" ]; do sleep 1; done
	sed -i s/API_HOST_IP/$$(kubectl -o=jsonpath={@.status.loadBalancer.ingress[0].ip} get svc api)/ k8s/client.deployment.json
	kubectl apply -f k8s/client.deployment.json
	kubectl apply -f k8s/client.service.json
	while [ "$$(kubectl -o=jsonpath={@.status.loadBalancer.ingress[0].ip} get svc client --ignore-not-found)" == "" ]; do sleep 1; done
	echo "Open browser at http://$$(kubectl -o=jsonpath={@.status.loadBalancer.ingress[0].ip} get svc client)"