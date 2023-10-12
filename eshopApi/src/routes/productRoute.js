const productRouter = require('express').Router();
const productController = require('../controllers/productController');
const {authAdmin,authOperator}=require('../middlewares/authMiddleware')
const upload=require('../middlewares/imageUploads')

productRouter.get('/', productController.getProducts);
productRouter.post('/',upload.array("images",10),authOperator, productController.createProduct);

productRouter.put('/:id',upload.array("images",10),authAdmin, productController.updateProduct);

productRouter.delete('/:id',authAdmin, productController.deleteProduct);

module.exports = productRouter;