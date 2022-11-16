import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function listCategories(req: Request, res: Response){
  try{
    const categories = await Category.find();
    res.json(categories);
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
