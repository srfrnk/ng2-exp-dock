FROM node

# https://github.com/npm/npm/issues/13289
COPY npm_hack/hosts /etc/hosts

RUN npm install pm2 -g

ADD . app/
RUN cd app && npm i

WORKDIR app
CMD ["npm","start"]

EXPOSE 3000
EXPOSE 7000
