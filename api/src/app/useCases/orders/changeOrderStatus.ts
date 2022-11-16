import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
      throw new Error('Status should be one of these: WAITING, IN_PRODUCTION or DONE.');
    }

    await Order.findByIdAndUpdate(orderId, {status});

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
        message: 'Erro list orders',
      });
    }
  }
}
