FROM node

RUN npm install pm2 -g

ADD . app/
RUN cd app && npm i

WORKDIR app
CMD ["npm","start"]

EXPOSE 3000
EXPOSE 7000
