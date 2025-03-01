# Use OpenJDK 11 as base image
FROM openjdk:11-jdk-buster

# Install LibreOffice and minimal dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        libreoffice \
        fonts-dejavu \
        fonts-liberation \
        libxinerama1 \
        libxcursor1 \
        libxrandr2 \
        libxrender1 \
        libxtst6 \
        libxi6 \
        libdbus-glib-1-2 \
        libgl1 \
        libglu1-mesa && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set environment variables for LibreOffice and Java
ENV OFFICE_HOME=/usr/lib/libreoffice
ENV JAVA_OPTS="-Doffice.home=${OFFICE_HOME} -Djava.awt.headless=true"

# Copy the backend JAR into the container (this JAR will be transferred by GitHub Actions)
COPY ./zoy-admin-server.jar /app/zoy-admin-server.jar

# Expose application and LibreOffice ports
EXPOSE 8082 2002

# Run the application with Java and LibreOffice in headless mode
ENTRYPOINT ["sh", "-c", "java ${JAVA_OPTS} -Xmx2g -jar /app/zoy-admin-server.jar"]
