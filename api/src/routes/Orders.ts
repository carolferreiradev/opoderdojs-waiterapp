import { Router } from 'express';
import { cancelOrder } from '../app/useCases/orders/cancelOrder';
import { changeOrderStatus } from '../app/useCases/orders/changeOrderStatus';
import { createOrder } from '../app/useCases/orders/createOrder';
import { listOrders } from '../app/useCases/orders/listOrders';
const router = Router();

// LIST ORDERS
router.get('/', listOrders);

// CREATE ORDER
router.post('/', createOrder);

// CHANGE ORDER STATUS
router.patch('/:orderId', changeOrderStatus);

// DELETE/CANCEL ORDER
router.delete('/:orderId', cancelOrder);

export const routerOrders = router;
