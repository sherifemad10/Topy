# Product Management Dashboard

A full-stack product management dashboard built with React, Vite, Tailwind CSS, Node.js, and Express. The application lets users view products, filter them by category, add new products, edit product details, and delete products.

## Features

- Dashboard and product pages
- Category filtering
- Add product form
- Edit product details, including image URL
- Delete products
- Loading and error states
- Responsive desktop and mobile navigation
- JSON-file persistence through the Express API

## Tech Stack

- Frontend: React 19, Vite, React Router, Tailwind CSS
- Backend: Node.js, Express
- Data: Local JSON file

## Requirements

- Node.js 18 or newer
- npm

## Run Locally

Open two terminals from the project root.

### 1. Start the backend

```bash
cd backend
npm install
npm run dev
```

The API runs at `http://localhost:5000`.

### 2. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

The frontend expects the backend to be available at `http://localhost:5000`.

## Frontend Scripts

Run these commands inside `frontend`:

```bash
npm run dev       # Start the Vite development server
npm run build     # Create a production build
npm run lint      # Check the frontend code with ESLint
npm run preview   # Preview the production build
```

## Backend Scripts

Run these commands inside `backend`:

```bash
npm start         # Start the API
npm run dev       # Start the API with nodemon
npm run seed      # Reset products to the seed data
```

## Application Routes

| Page | Route |
|---|---|
| Dashboard | `/` |
| All products | `/products` |
| Add product | `/addproduct` |

## API Endpoints

The API base URL is `http://localhost:5000/api`.

| Action | Method | Endpoint |
|---|---|---|
| Health check | GET | `/health` |
| List products | GET | `/products` |
| Get one product | GET | `/products/:id` |
| Create product | POST | `/products` |
| Update product | PUT | `/products/:id` |
| Delete product | DELETE | `/products/:id` |

See [backend/API_ENDPOINTS.md](backend/API_ENDPOINTS.md) for request and response examples.

## Project Structure

```text
backend/
  server.js                 Express server entry point
  src/controllers/          API request handlers
  src/data/                 JSON data and data access functions
  src/middleware/           Validation and error handling
  src/routes/               API routes

frontend/
  src/component/            Reusable UI components
  src/Hooks/                Data and mutation hooks
  src/Pages/                Application pages
  src/router/               React Router configuration
  src/UI/                   Shared UI components
```

## Reset Local Data

Product changes are stored in `backend/src/data/products.json`. Restore the original products with:

```bash
cd backend
npm run seed
```
