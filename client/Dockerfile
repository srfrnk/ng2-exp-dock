FROM node

# https://github.com/npm/npm/issues/13289
COPY npm_hack/hosts /etc/hosts

ADD . app/
RUN cd app && npm i

WORKDIR app
CMD ["npm","start"]

EXPOSE 80
