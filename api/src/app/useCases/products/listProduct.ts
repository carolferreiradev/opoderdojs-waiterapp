import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response){
  try{
    const products = await Product.find();
    res.json(products);
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
        message: 'Erro list categories',
      });
    }
  }
}
