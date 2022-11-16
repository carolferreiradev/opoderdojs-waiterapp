import { Router } from 'express';
import { createCategory } from '../app/useCases/categories/createCategory';
import { listCategories } from '../app/useCases/categories/listCategories';
import { listProductsByCategory } from '../app/useCases/categories/listProductsByCategory';
const router = Router();

// LIST CATEGORIES
router.get('/', listCategories);

// CREATE CATEGORY
router.post('/', createCategory);

// GET PRODUCTS BY CATEGORY
router.get('/:categoryId/products', listProductsByCategory);

export const routerCategories = router;
