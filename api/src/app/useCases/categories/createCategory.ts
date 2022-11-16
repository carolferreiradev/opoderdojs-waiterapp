import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;
    if (!name) throw new Error('Name is required');
    if (!icon) throw new Error('Icon is required');

    const nameWithSameName = await Category.find({name});
    if(nameWithSameName.length > 0){
      throw new Error('Name category already exists');
    }

    const category = await Category.create({ name, icon });

    res.status(201).json(category);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.message) {
      res.status(400).send({
        message: error.message,
      });
    }
    if (!error.message) {
      res.status(400).send({
        message: 'Erro create category',
      });
    }
  }
}
