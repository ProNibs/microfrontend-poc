# golang:alpine3.14 is running go 1.17.2 as of Oct. 21, 2021
FROM golang:alpine3.14 as build
WORKDIR /app
# Copy just the go dependencies stuff
COPY go.mod .
COPY go.sum .
RUN go mod download

COPY src/ ./src
RUN go build -o main ./src


FROM node:lts-slim as nodebuild
WORKDIR /app
# Copy package.json so npm install isn't re-ran on every code change
COPY javascript_src/package.json .
RUN yarn install
COPY javascript_src .
RUN yarn run build
# Once done, aboutus.js will be made at /app/dist


FROM golang:alpine3.14 as prod
WORKDIR /app
COPY --from=build /app/main .
COPY --from=nodebuild /app/dist/ static/
COPY static/ static
EXPOSE 8080
CMD [ "/app/main" ]
