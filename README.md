# Angular2 Express Docker

## Objectives

This is a skeleton for a web application.

## Design

The application is comprised of 2 components:

1) Client Side Code Server
2) API Server

To deploy and test locally the 2 components are run linked via [docker-compose](https://docs.docker.com/compose/).

Deployment on production uses a [K8S](https://kubernetes.io/) cluster - hosted via [GKE](https://cloud.google.com/container-engine/).

### Client Server
- Code is located under the [client](./code) folder
- Uses [NodeJS](https://nodejs.org/en/) and [Angular2](https://angular.io/) with [Material Design UI](https://material.angular.io/).
- Built using [angular-cli](https://www.npmjs.com/package/angular-cli).
- Uses [Karma](https://karma-runner.github.io/1.0/index.html) and [Jasmine](https://jasmine.github.io/) to test client side code to verify compilation of angular module and components.

### API Server
- Code is located under the [api](./api) folder
- Uses [NodeJS](https://nodejs.org/en/) and [ExpressJS](https://expressjs.com/)

## Local deploy
### Prerequisites
- *nix machine - preferably Ubuntu 16 or up.
- `docker` installed
- `docker-compose` installed.
- `make` installed
### Installation Steps
- `cd` into the project folder
- Run `make setup`
- Run `make build`
- Run `make up`
- Wait until dockers are up. (will show in the terminal console)
- Open your browser at [http://localhost](http://localhost)
- Wait for the application to load. (May take a minute for the first time)
- Run `make test` to run a test run over client code in Chrome.

## Production Deploy
### Prerequisites
- Web Browser - preferably chrome.
- Credit card to create GCP account.
### Installation Steps
- Create a GCP account and project [here](https://console.cloud.google.com).
- Use [Cloud Shell](https://cloud.google.com/shell/docs/starting-cloud-shell) to run rest of the steps.
- Use the Cloud Shell `Files|Upload file` menu to upload the zipped project folder into Cloud Shell.
- Unzip the folder: `$ unzip <project.zip>`
- CD into the folder: `$ cd <project folder>`
- Create a GKE cluster. Run the following cmd: `make create-cluster`
- Run the following cmd: `make build`
- Run the following cmd: `make deploy-build`
- Deploy the application. Run the following cmd: `make deploy-cluster`
- When complete - terminal will display `Open browser at http://<SOME_IP>` - open the page and wait for the application to load. (May take a minute for the first time)
