const orderRouter=require('express').Router();
const orderController=require('../controllers/orderController');

orderRouter.get('/',orderController.orderlist);

orderRouter.post('/:id',orderController.createOrder);

orderRouter.get('/:id',orderController.getOrders);

orderRouter.put('/:id',orderController.updateOrder);

orderRouter.delete('/:id',orderController.deleteOrder);

module.exports=orderRouter;
