# Docker image which has all the monorepo source details
FROM node:lts-alpine as builder

ARG NODE_ENV
ARG BUILD_FLAG

WORKDIR /app/builder
COPY . .
RUN yarn