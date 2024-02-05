import { IsNumber, IsString, Min, MinLength } from 'class-validator';

class CreateProductDto {
  @MinLength(3, { message: `Title is too short` })
  title: string;

  @MinLength(20, { message: `Title is too short` })
  description: string;

  @Min(0, { message: `Price must be a positive number` })
  price: number;

  @IsNumber({ allowNaN: false }, { message: `Price must be a number` })
  quantity: number;

  @IsString({ each: true })
  images: string[];
}

export default CreateProductDto;
