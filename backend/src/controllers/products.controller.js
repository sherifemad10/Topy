const productsStore = require("../data/productsStore");
const ApiError = require("../utils/ApiError");

// GET /api/products?search=&category=
function getProducts(req, res) {
  const { search, category } = req.query;
  const products = productsStore.getAll({ search, category });

  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
}

// GET /api/products/:id
function getProduct(req, res, next) {
  const product = productsStore.getById(req.params.id);

  if (!product) {
    return next(new ApiError(404, `Product with id '${req.params.id}' was not found.`));
  }

  res.status(200).json({ success: true, data: product });
}

// POST /api/products
function createProduct(req, res) {
  const product = productsStore.create(req.body);
  res.status(201).json({ success: true, data: product });
}

// PUT /api/products/:id
function updateProduct(req, res, next) {
  const updated = productsStore.update(req.params.id, req.body);

  if (!updated) {
    return next(new ApiError(404, `Product with id '${req.params.id}' was not found.`));
  }

  res.status(200).json({ success: true, data: updated });
}

// DELETE /api/products/:id
function deleteProduct(req, res, next) {
  const deleted = productsStore.remove(req.params.id);

  if (!deleted) {
    return next(new ApiError(404, `Product with id '${req.params.id}' was not found.`));
  }

  res.status(200).json({ success: true, message: "Product deleted successfully." });
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
