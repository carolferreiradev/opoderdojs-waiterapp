import { model, Schema } from 'mongoose';

export const Product = model(
  'Product',
  new Schema({
    name: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    imagePath: {
      type: Schema.Types.String,
      required: true,
    },
    price: {
      type: Schema.Types.Number,
      required: true,
    },
    ingredients: [
      {
        name: {
          type: Schema.Types.String,
          required: true,
        },
        icon: {
          type: Schema.Types.String,
          required: true,
        },
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
  })
);
