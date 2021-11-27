FROM node:lts-slim as nodebuild
WORKDIR /app
# Copy package.json so npm install isn't re-ran on every code change
COPY javascript_src/package.json .
RUN yarn install
COPY javascript_src/ ./
RUN yarn run build
# Once done, guests.js will be made at /app/dist

FROM openjdk:11-jdk-slim as build
WORKDIR /app

COPY ./gradle/ /app/gradle/
COPY build.gradle gradlew settings.gradle ./
COPY src/ ./src
# Bring in the javascript
COPY --from=nodebuild /app/dist/ /app/src/main/resources/static/
# Gradle build, but skip tests
RUN ./gradlew build -x test
RUN mkdir -p build/libs/dependency && (cd build/libs/dependency; jar -xf ../*.jar)

FROM openjdk:11-jre-slim
VOLUME /tmp
ARG DEPENDENCY=/app/build/libs/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
EXPOSE 8080
ENTRYPOINT ["java","-cp","app:app/lib/*","com.ellyuzuki.wedding.WeddingApplication"]