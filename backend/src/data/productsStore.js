const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "products.json");

function readAll() {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function writeAll(products) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2), "utf-8");
}

function getAll({ search, category } = {}) {
  let products = readAll();

  if (category) {
    products = products.filter(
      (p) => p.category.toLowerCase() === String(category).toLowerCase()
    );
  }

  if (search) {
    const term = String(search).toLowerCase();
    products = products.filter((p) => p.name.toLowerCase().includes(term));
  }

  return products;
}

function getById(id) {
  return readAll().find((p) => p.id === String(id));
}

function create(productData) {
  const products = readAll();

  const newProduct = {
    id: Date.now().toString(),
    name: productData.name,
    category: productData.category,
    price: Number(productData.price),
    stock: Number(productData.stock ?? 0),
    description: productData.description || "",
    image: productData.image || "",
    createdAt: new Date().toISOString(),
  };

  products.push(newProduct);
  writeAll(products);
  return newProduct;
}

function update(id, productData) {
  const products = readAll();
  const index = products.findIndex((p) => p.id === String(id));

  if (index === -1) return null;

  const existing = products[index];
  const updated = {
    ...existing,
    name: productData.name ?? existing.name,
    category: productData.category ?? existing.category,
    price: productData.price !== undefined ? Number(productData.price) : existing.price,
    stock: productData.stock !== undefined ? Number(productData.stock) : existing.stock,
    description: productData.description ?? existing.description,
    image: productData.image ?? existing.image,
  };

  products[index] = updated;
  writeAll(products);
  return updated;
}

function remove(id) {
  const products = readAll();
  const index = products.findIndex((p) => p.id === String(id));

  if (index === -1) return false;

  products.splice(index, 1);
  writeAll(products);
  return true;
}

module.exports = { getAll, getById, create, update, remove };
