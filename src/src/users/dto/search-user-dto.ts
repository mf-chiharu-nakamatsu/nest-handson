// src/users/dto/search-user.dto.ts
import { Type } from 'class-transformer';
import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

export class SearchUserDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  //ValidationPipe の transform オプションが有効になっていても、数値変換が自動で行われないため明示的に数値型に変換
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  readonly age: number;
}
