# Build Stage: compile & package the app with the `JDK`.
FROM eclipse-temurin:21-jdk AS build

# Working Directory.
WORKDIR /app

COPY gradlew .
COPY gradle gradle
COPY build.gradle.kts settings.gradle.kts ./
COPY src src

# Runtime Stage: run the built `JAR` with the slim `JRE` image.
RUN chmod +x gradlew && ./gradlew clean test bootJar --no-daemon

FROM eclipse-temurin:21-jre

# Working Directory
WORKDIR /app

COPY --from=build /app/build/libs/*.jar app.jar

# Backend port
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
