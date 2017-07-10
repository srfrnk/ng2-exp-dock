FROM node

ADD . app/
RUN cd app && npm i

WORKDIR app
CMD ["npm","start"]

EXPOSE 80

