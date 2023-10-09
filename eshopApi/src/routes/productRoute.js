const productRouter = require('express').Router();
const productController = require('../controllers/productController');

productRouter.get('/', productController.getProducts);
productRouter.post('/', productController.createProduct);

productRouter.put('/:id', productController.updateProduct);

productRouter.delete('/:id', productController.deleteProduct);

module.exports = productRouter;