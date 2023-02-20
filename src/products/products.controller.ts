import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productsService.create(createProductDto)
    return { message: 'Product created', product: product };
  }

  @Get()
  async findAll() {
    const products = await this.productsService.findAll();
    if (products) {
      return { message: 'Products found', products: products }
    } else {
      return { message: 'err' , products: 'Products not found' }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(id);
    if (product) {
      return { message : 'Product found', product: product}
    } else {
      return { message: 'err', product: 'Product not found'}
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const product = await this.productsService.findOne(id)
    if (product) {
      const result = await this.productsService.remove(id);
      if (result.deletedCount > 0) {
        return { message : 'Product deleted successfully', product: product }
      } else {
        return { message: 'err', product: 'Product not found' }
      }
    } else {
      return { message: 'err', product: 'Product not found' }
    }
  }
}
