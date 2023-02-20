import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({ example: 'Producto 01', description: 'The name of a product' })
  name: string;
  @ApiProperty({ example: 10, description: 'The price of a product' })
  price: number;
  @ApiProperty({ example: 250, description: 'The stock of a product' })
  stock: number;
  @ApiProperty({
    example:
      'https://i.pinimg.com/originals/24/58/5f/24585fc9b7433a224a6ff5506e346969.png',
    description: 'The photo of a product',
  })
  thumbnail: string;
}
