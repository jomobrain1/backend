import {
    IsDate,
    IsEmpty,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  

  
  export class UpdateHolidayDto {
    @IsOptional()
    @IsString()
    readonly package_name: string;
  
    @IsOptional()
    @IsString()
    readonly description: string;
  
    @IsOptional()
    @IsString()
    readonly destination: string;

    @IsOptional()
    @IsString()
    readonly image_url: string;
  
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    readonly price: number;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    readonly seats: number;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    readonly duration: number;

    @IsOptional()
    // @IsDate()
    readonly depature_date: Date;


  
    
  }
  