const Product = require('../models/productModel');
const asyncHandler = require("express-async-handler");


const createProduct = asyncHandler(async (req, res) => {
    res.json(
        {
            message: "Heys its product post route",
        }
    );
});

module.exports = { createProduct };