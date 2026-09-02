# Product Dashboard API — Endpoints Guide

**Phase 3 · Project 3: Product Management Dashboard**

This is the backend you'll connect your React app to. It is a REST API — you will
never write backend code yourselves, only call these endpoints from your
front-end using **Axios**.

## Base URL

```
https://<your-provided-url>/api
```

> Your instructor will give you the real base URL. Every endpoint below is
> relative to it — e.g. `/products` really means `<base URL>/products`.

## Before you start

- Put the base URL in a `.env` file in your React project, **never hardcode it**:
  ```
  VITE_API_URL=https://<your-provided-url>/api
  ```
- All request and response bodies are **JSON**.
- Every response follows the same shape:
  ```json
  { "success": true, "data": ... }
  ```
  or, on failure:
  ```json
  { "success": false, "message": "explanation of what went wrong" }
  ```
- Always check `success` — don't assume a request worked.

---

## 1. Health Check

Use this once at the start to confirm you can reach the API at all.

| | |
|---|---|
| **Method** | `GET` |
| **URL** | `/health` |
| **Body** | — |

**Response `200`**
```json
{ "success": true, "message": "API is up and running." }
```

---

## 2. Get All Products

| | |
|---|---|
| **Method** | `GET` |
| **URL** | `/products` |
| **Query params (optional)** | `?search=keyboard` &nbsp; `?category=Accessories` |

**Response `200`**
```json
{
  "success": true,
  "count": 6,
  "data": [
    {
      "id": "1",
      "name": "Wireless Mouse",
      "category": "Accessories",
      "price": 349,
      "stock": 42,
      "description": "Ergonomic wireless mouse with adjustable DPI.",
      "image": "https://picsum.photos/seed/mouse/400/300",
      "createdAt": "2026-01-05T10:00:00.000Z"
    }
  ]
}
```

Use this to fill your Products page. Filtering with `search` / `category` is
optional — you can also filter on the front-end with the data you already have.

---

## 3. Get a Single Product

| | |
|---|---|
| **Method** | `GET` |
| **URL** | `/products/:id` (example: `/products/1`) |

**Response `200`**
```json
{ "success": true, "data": { "id": "1", "name": "Wireless Mouse", "...": "..." } }
```

**Response `404`** (id doesn't exist)
```json
{ "success": false, "message": "Product with id '99' was not found." }
```

Use this for a Product Details page, or to pre-fill your Edit form.

---

## 4. Create a Product

| | |
|---|---|
| **Method** | `POST` |
| **URL** | `/products` |

**Request body**
```json
{
  "name": "Desk Mat",
  "category": "Accessories",
  "price": 199,
  "stock": 30,
  "description": "Large anti-slip desk mat.",
  "image": "https://picsum.photos/seed/deskmat/400/300"
}
```

`name` and `price` are **required**. Everything else is optional.

**Response `201`**
```json
{ "success": true, "data": { "id": "1732820391123", "name": "Desk Mat", "...": "..." } }
```

**Response `400`** (missing required field)
```json
{ "success": false, "message": "'name' is required and must be a non-empty string." }
```

---

## 5. Update a Product

| | |
|---|---|
| **Method** | `PUT` |
| **URL** | `/products/:id` |

**Request body** — send only the fields you want to change:
```json
{ "price": 179, "stock": 25 }
```

**Response `200`**
```json
{ "success": true, "data": { "id": "1", "price": 179, "stock": 25, "...": "..." } }
```

**Response `404`** if the id doesn't exist.

---

## 6. Delete a Product

| | |
|---|---|
| **Method** | `DELETE` |
| **URL** | `/products/:id` |

**Response `200`**
```json
{ "success": true, "message": "Product deleted successfully." }
```

**Response `404`** if the id doesn't exist.

---

## Quick Reference

| Action | Method | Endpoint |
|---|---|---|
| Health check | GET | `/health` |
| List products | GET | `/products` |
| Get one product | GET | `/products/:id` |
| Create product | POST | `/products` |
| Update product | PUT | `/products/:id` |
| Delete product | DELETE | `/products/:id` |

## Reminders from the Technical Requirements

- Every request should go through **Axios**, ideally wrapped in a custom hook
  (e.g. `useProducts()`), not called directly inside a component.
- Show a **loading state** while a request is in flight, and a clear **error
  message** if `success: false` comes back or the network fails.
- Share product state across pages with **Context API** — don't refetch on
  every page if you don't have to.
- Keep the API URL in an environment variable, never hardcoded.
