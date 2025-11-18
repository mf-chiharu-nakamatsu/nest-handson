import {
  IsString,
  IsInt,
  Min,
  Max,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  age?: number;

  @IsOptional()
  @IsString()
  @MinLength(8)
  password?: string;
}
