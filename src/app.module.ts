import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    ProductModule,
  ],
  providers: [],
})
export class AppModule {}
