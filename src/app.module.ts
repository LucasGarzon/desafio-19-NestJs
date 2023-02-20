import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { config } from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
config();

const URI = process.env.DATABASE

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(URI)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
