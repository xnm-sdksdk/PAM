FROM amazoncorretto:21.0.9-alpine3.20 AS build

WORKDIR /app

COPY gradlew .
COPY gradle ./gradle
COPY build.gradle .
COPY settings.gradle .
COPY gradle.properties .
COPY src ./src

RUN ./gradlew build -x test

FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

COPY --from=build /app/build/quarkus-app/ /app/

EXPOSE 3002

CMD ["java", "-jar", "/app/quarkus-run.jar"]
