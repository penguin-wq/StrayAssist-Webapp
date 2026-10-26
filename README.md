# 🐈🐕StrayAssist

## 🚀🐋Quick Start (Docker)

Docker is the only prerequisite. Node.js, Java, and Gradle do not need to be installed locally.

```bash
git clone https://github.com/penguin-wq/StrayAssist-Webapp.git
cd StrayAssist-Webapp
docker compose up --build
```

Once the containers are up:

| Service  | URL                   |
| -------- | --------------------- |
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:8080 |

Stop the stack with `Ctrl+C`, or `docker compose down` if running detached.

### 🔥Hot Reload

The frontend container mounts `./frontend` into `/app`, so edits to frontend source files reload in the browser without rebuilding the image. An anonymous volume on `/app/node_modules` keeps the container's dependencies from being overwritten by the host.

Backend changes require rebuilding the image:

```bash
docker compose up --build backend
```

## 🌐 How the Frontend Talks to the Backend

The Vite dev server proxies requests starting with `/api` to the backend. The proxy target is controlled by the `VITE_PROXY_TARGET` environment variable, which `docker-compose.yaml` sets to `http://backend:8080` so the frontend container reaches the backend over the Compose network.

Always call the API with an absolute path:

```ts
fetch('/api/hello')
```

A relative path such as `fetch('api/hello')` resolves against the current page, bypasses the proxy, and returns Vite's `index.html` instead of JSON. See [LOGS.md](LOGS.md) for details.

## 🐋 Running Without Docker

Run the backend and frontend in separate terminals.

**Backend** (requires JDK 17+):

```bash
cd backend
./gradlew bootRun
```

**Frontend** (requires Node.js):

```bash
cd frontend
npm install
npm run dev
```

When running outside Docker, the proxy target must point at `http://localhost:8080`. Set it explicitly if the Vite config does not default to that:

```bash
VITE_PROXY_TARGET=http://localhost:8080 npm run dev
```
