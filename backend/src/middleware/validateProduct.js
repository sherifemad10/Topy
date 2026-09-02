const ApiError = require("../utils/ApiError");

// Runs on POST and PUT /api/products. Keeps validation obvious and simple
// on purpose — this is what students' front-end error handling should expect.
function validateProduct(req, res, next) {
  const { name, price } = req.body;
  const isCreate = req.method === "POST";
  const errors = [];

  if (isCreate && (!name || typeof name !== "string" || !name.trim())) {
    errors.push("'name' is required and must be a non-empty string.");
  }

  if (isCreate && (price === undefined || price === null || price === "")) {
    errors.push("'price' is required.");
  }

  if (price !== undefined && price !== null && price !== "" && Number.isNaN(Number(price))) {
    errors.push("'price' must be a number.");
  }

  if (req.body.stock !== undefined && Number.isNaN(Number(req.body.stock))) {
    errors.push("'stock' must be a number.");
  }

  if (errors.length > 0) {
    return next(new ApiError(400, errors.join(" ")));
  }

  next();
}

module.exports = validateProduct;
