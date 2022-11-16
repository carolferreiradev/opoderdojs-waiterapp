import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try{
    const { table, products } = req.body;
    const orders = await Order.create({ table, products });
    res.status(201).json(orders);
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
