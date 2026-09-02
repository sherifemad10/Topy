// Resets src/data/products.json back to the original seed data.
// Run with: npm run seed
const fs = require("fs");
const path = require("path");

const seedFile = path.join(__dirname, "..", "data", "products.seed.json");
const dataFile = path.join(__dirname, "..", "data", "products.json");

const seedData = fs.readFileSync(seedFile, "utf-8");
fs.writeFileSync(dataFile, seedData, "utf-8");

console.log("✅ products.json has been reset to the original seed data.");
