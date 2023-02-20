import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products, ProductsDocument } from './schema/products.schema';

@Injectable()
export class ProductsService {

  productsModel: any;
  constructor(
    @InjectModel(Products.name) productsModel : Model<ProductsDocument>
  ) {
    this.productsModel= productsModel
  }

  async create(createProductDto: CreateProductDto) {
    return this.productsModel.create(createProductDto)
  }

  async findAll() {
    return this.productsModel.find()
  }

  async findOne(id: string) {
    return this.productsModel.findById(id)
    // return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
