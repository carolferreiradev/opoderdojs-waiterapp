import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function cancelOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    if (!orderId) {
      throw new Error('orderId is required.');
    }

    await Order.findByIdAndDelete(orderId);

    res.sendStatus(204);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.message) {
      res.status(400).send({
        message: error.message,
      });
    }
    if (!error.message) {
      res.status(500).send({
        message: 'Erro cancel order',
      });
    }
  }
}
