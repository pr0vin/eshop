const Product = require("../models/Product");
const fs = require("fs");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    if (!products) {
      res.status(404).send("No products found");
    } else {
      res.status(200).send(products);
    }
  } catch (error) {
    res.send(error.message);
  }
};

// get single product

const getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).send("No product found");
    } else {
      res.status(200).send(product);
    }
  } catch (error) {
    res.send(error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    if (!req.files) {
      const product = await Product.create(req.body);
      if (!product) {
        res.status(400).send("Something went wrong");
      } else {
        res
          .status(201)
          .send({ message: "Product created successfully", product: product });
      }
    } else {
      const data = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        images: req.files,
        stock: req.body.stock,
        rating: req.body.rating,
        discount: req.body.discount,
        sizes: req.body.sizes,
        colors: req.body.colors,
      };

      const product = await Product.create(data);
      if (!product) {
        res.status(400).send("Something went wrong");
      } else {
        res
          .status(201)
          .send({ message: "Product created successfully", product: product });
      }
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const images = req.files;
    const data = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      images: images,
      stock: req.body.stock,
      rating: req.body.rating,
      discount: req.body.discount,
      sizes: req.body.sizes,
      colors: req.body.colors,
    };

    if (images.length > 0) {
      const result = await Product.findById(req.params.id);
      if (result.images) {
        for (let i = 0; i < result.images.length; i++) {
          fs.unlinkSync(`./public/uploads/images/${result.images[i].filename}`);
        }
      }
      const product = await Product.findByIdAndUpdate(req.params.id, data, {
        new: true,
        upsert: true,
      });
      if (!product) {
        res.status(400).send("Something went wrong");
      } else {
        res
          .status(200)
          .send({ message: "Product updated successfully", product: product });
      }
    } else {
      const newData = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        stock: req.body.stock,
        rating: req.body.rating,
        discount: req.body.discount,
        sizes: req.body.sizes,
        colors: req.body.colors,
      };

      const product = await Product.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        upsert: true,
      });

      if (!product) {
        res.status(400).send("Something went wrong");
      } else {
        res
          .status(200)
          .send({ message: "Product updated successfully", product: product });
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    if (result.images) {
      for (let i = 0; i < result.images.length; i++) {
        fs.unlinkSync(`./public/uploads/images/${result.images[i].filename}`);
      }
    }
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(400).send("Something went wrong");
    } else {
      res
        .status(200)
        .send({ message: "Product deleted successfully", product: product });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
};
