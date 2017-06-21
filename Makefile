all:
	pass

setup:
	cd api && npm i
	cd client && npm i
	
build:
	docker-compose -f docker-compose.prod.yml -f docker-compose.dev.yml build

up:
	docker-compose -f docker-compose.prod.yml -f docker-compose.dev.yml up

up-prod:
	docker-compose -f docker-compose.prod.yml up

down:
	docker-compose -f docker-compose.prod.yml -f docker-compose.dev.yml kill
