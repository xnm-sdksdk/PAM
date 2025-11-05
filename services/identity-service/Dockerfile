FROM node:25-alpine

RUN apk add --no-cache curl

RUN groupadd -S myuser && useradd -S -G myuser myuser

WORKDIR /app

COPY ["package.json","package-lock.json","./"]

RUN npm i

COPY . . 

RUN chown -R myuser:myuser /app

USER myuser

EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl --fail http://localhost:3001/health || exit 1

CMD ["node", "src/app.js"]
