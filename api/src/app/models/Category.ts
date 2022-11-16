import { model, Schema } from 'mongoose';

export const Category = model(
  'Category',
  new Schema({
    name: {
      type: Schema.Types.String,
      required: true,
    },
    icon: {
      type: Schema.Types.String,
      required: true,
    },
  })
);
