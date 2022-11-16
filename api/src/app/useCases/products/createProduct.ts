import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const { name, description, price, ingredients, category } = req.body;
    const imagePath = req.file?.filename;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price) * 100,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      category,
    });
    res.json(product);
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
