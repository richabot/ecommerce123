import express from 'express';
import { addOrderItems, getOrderByID, updateOrderToPaid, getMyOrders,getOrders, updateOrderToDelivered } from '../controllers/orderController.js';
import { protect,admin } from '../middleware/authMiddleware.js';
const router=express.Router()



//Fetch All Products

router.route('/').post(protect, addOrderItems).get(protect,admin, getOrders);
router.route('/myorders').get(protect,getMyOrders)
router.route('/:id').get(protect,getOrderByID)
router.route('/:id/pay').put(protect,updateOrderToPaid)
router.route('/:id/deliver').put(protect,admin,updateOrderToDelivered)


export default router