import { Router } from 'express';
import { createProduct } from '../app/useCases/products/createProduct';
import { listProducts } from '../app/useCases/products/listProduct';
import { upload } from '../middlewares/multer';


const router = Router();

// LIST PRODUCTS
router.get('/', listProducts);

// CREATE PRODUCT
//image => nome da propriedade que está vindo na request
router.post('/',upload.single('image'), createProduct);


export const routerProducts = router;
