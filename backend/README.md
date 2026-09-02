# Product Dashboard API — TechMaster Academy (Phase 3)

A small Node.js + Express REST API for the Phase 3 "Product Management Dashboard"
project. Data is stored in a local JSON file (`src/data/products.json`), so there is
no database to install or configure — perfect for a training project.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev        # starts on http://localhost:5000 with auto-reload
# or: npm start
```

## Reset the data

Students will create/update/delete products while testing. To wipe the data back
to the original seed list at any point:

```bash
npm run seed
```

## Deploying for students

Deploy this folder as-is to any Node host (Render, Railway, Cyclic, etc.):

- Build command: `npm install`
- Start command: `npm start`
- Environment variable: `PORT` is provided automatically by most hosts; `CORS_ORIGIN`
  can be left as `*` for the training project.

Once deployed, give students the base URL (e.g. `https://your-app.onrender.com`) and
share `API_ENDPOINTS.md` with them — that is the document written for the students.

## Project structure

```
src/
 ├─ controllers/     Route handlers (business logic)
 ├─ data/            JSON "database" + read/write access layer
 ├─ middleware/      Validation, 404, and error handling
 ├─ routes/          Express routers
 ├─ utils/           ApiError class, data reset script
 └─ app.js           Express app (middleware + routes wiring)
server.js            Entry point
```

## Notes for grading

- Data is per-deployment, not per-student — if all students share one deployed
  instance, they will see each other's products. For individual grading, either
  give each student their own free-tier deployment, or run the API locally.
- `npm run seed` resets `products.json` between test rounds.
