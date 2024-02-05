import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
class Product {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ unique: true, lowercase: true })
  slug: string;

  @Prop({ required: true })
  description: string;

  @Prop([String])
  images: string[];

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  price: number;
}

export type ProductDocument = HydratedDocument<Product>;

export const ProductSchema = SchemaFactory.createForClass(Product);

export default Product;
