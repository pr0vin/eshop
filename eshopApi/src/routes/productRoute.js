const productRouter = require('express').Router();
const productController = require('../controllers/productController');
const {authAdmin,authOperator}=require('../middlewares/authMiddleware')

productRouter.get('/', productController.getProducts);
productRouter.post('/',authOperator, productController.createProduct);

productRouter.put('/:id',authAdmin, productController.updateProduct);

productRouter.delete('/:id',authAdmin, productController.deleteProduct);

module.exports = productRouter;