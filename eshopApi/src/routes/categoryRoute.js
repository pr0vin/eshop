const categoryRouter=require('express').Router();
const categoryController=require('../controllers/categoryController');

categoryRouter.get('/',categoryController.getCategories);

categoryRouter.post('/',categoryController.createCategory);

categoryRouter.put('/:id',categoryController.updateCategory);

categoryRouter.delete('/:id',categoryController.deleteCategory);

module.exports=categoryRouter;