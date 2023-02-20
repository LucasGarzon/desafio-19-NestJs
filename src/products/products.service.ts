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
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const { name, price, stock, thumbnail } = updateProductDto
    const product = await this.productsModel.findById(id)
    if (!product) {
      throw new Error(`Product with id ${id} not found`)
    } 
    if (name) {
      product.name = name
    }
    if (price) {
      product.price = price
    }
    if (stock) {
      product.stock = stock
    }
    if (thumbnail) {
      product.thumbnail = thumbnail
    }
    await product.save()
    return product
  }

  async remove(id: string) {
    return this.productsModel.deleteOne({ _id: id })
  }
}
