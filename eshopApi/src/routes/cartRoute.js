const cartRouter=require('express').Router();
const cartController=require('../controllers/cartController');

cartRouter.get('/:id',cartController.getCartItems); 

cartRouter.post('/:id',cartController.addToCart); 

cartRouter.put('/:id',cartController.removeFromCart);

cartRouter.delete('/:id',cartController.emptyCart);


module.exports=cartRouter;