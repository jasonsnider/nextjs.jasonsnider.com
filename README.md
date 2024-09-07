# nextjs.jasonsnider.com
A Next.js implementation of jasonsnider.com

## Getting started
Create an `.env` file and set the `APP_NAME`
```sh
cp .env.dist .env.local
```

```sh
APP_NAME=nextjs-jasonsnider-com
```

Build the image and start the container
```sh
docker compose up --build -d
```

Enter the container
```sh
docker exec -it $(docker ps | grep 'next' | tr ' ' '\n' | tail -1) sh
```

Linting with eslint and prettier, from the container run
```sh
npm run lint
npm run lint -- --fix
```