import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
  try{
    const orders = await Order.find().sort({createdAt: 1}).populate('products.product');
    res.json(orders);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    if (error.message) {
      res.status(400).send({
        message: error.message,
      });
    }
    if (!error.message) {
      res.status(500).send({
        message: 'Erro list orders',
      });
    }
  }
}
