import {
  IsDate,
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateHolidayDto {
  @IsNotEmpty()
  @IsString()
  readonly package_name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly destination: string;

  @IsNotEmpty()
  @IsString()
  readonly image_url: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  readonly price: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  readonly seats: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  readonly duration: number;

  @IsNotEmpty()
  //  @IsDate()
  readonly depature_date: Date;
}
