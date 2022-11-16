import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import routes from '../routes';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    const PORT = 3001;
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads').replace('\\src', '')));

    app.use(express.json());

    app.use('/categories', routes.categories);
    app.use('/products', routes.products);
    app.use('/orders', routes.orders);

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log('Error connecting to database.'));
