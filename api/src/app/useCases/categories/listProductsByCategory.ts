import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    if (!categoryId) throw new Error('categoryId is required');

    const category = await Product.find().where('category').equals(categoryId);
    res.json(category);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
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
