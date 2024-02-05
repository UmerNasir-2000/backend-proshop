import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import slugify from 'slugify';

@Schema({ timestamps: true, versionKey: false })
class Product {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ unique: true })
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

ProductSchema.pre('save', function (next) {
  this.slug = slugify(this.title);
  next();
});

export default Product;
