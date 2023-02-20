import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductsDocument = HydratedDocument<Products>;

@Schema()
export class Products {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true , min: 0})
  stock: number;

  @Prop({
    default:
      'https://i.pinimg.com/originals/24/58/5f/24585fc9b7433a224a6ff5506e346969.png',
  })
  thumbnail: string;
}

export const ProductsModel = SchemaFactory.createForClass(Products)