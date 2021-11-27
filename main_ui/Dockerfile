FROM node:lts-slim

WORKDIR /app
#ENV PATH /app/node_modules/.bin:$PATH
ENV ABOUT_US_HOST http://localhost:8080

# If we just copy package.json
# Won't need to do a re-build all the damn time
COPY package.json .
RUN yarn install

VOLUME /app/node_modules
COPY . .

EXPOSE 3000
#ENTRYPOINT [ "/bin/sh", "npm"]
#CMD [ "node", "wedding-base" ]
CMD ["yarn", "run", "start"]
