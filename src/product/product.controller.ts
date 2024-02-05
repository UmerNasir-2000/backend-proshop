import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import Product from './schema/product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }
}
