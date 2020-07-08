FROM node:alpine

WORKDIR '/app'

COPY ./package.json ./
RUN npm install
COPY . . 

RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# Elastic Beanstalk doesn't like named stages
# --from=0 is from the node:alpine image above
#
# Copy the `build` dir that was made in stage 0 to the new
# nginx webserver
COPY --from=0 /app/build /usr/share/nginx/html