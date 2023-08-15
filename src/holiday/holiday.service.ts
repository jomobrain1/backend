import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Holiday } from './schemas/HolidayPackage.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';

@Injectable()
export class HolidayService {
  constructor(
    @InjectModel(Holiday.name)
    private holidayModel: mongoose.Model<Holiday>,
  ) {}

  async findAll(query: Query): Promise<Holiday[]> {
    const keyword = query.keyword
    ? {
        description: {
          $regex: query.keyword,
          $options: 'i',
        },
      }
    : {};
    const holidays = await this.holidayModel.find({...keyword});
    return holidays;
  }

  async create(holiday: Holiday): Promise<Holiday> {
    const res = await this.holidayModel.create(holiday);
    return res;
  }

  async findById(id: string): Promise<Holiday> {
    const isValidId = mongoose.isValidObjectId(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter correct id.');
    }

    const holiday = await this.holidayModel.findById(id);

    if (!holiday) {
      throw new NotFoundException('Holiday not found.');
    }

    return holiday;
  }

  async updateById(id: string, hotel: Holiday): Promise<Holiday> {
    return await this.holidayModel.findByIdAndUpdate(id, hotel, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Holiday> {
    return await this.holidayModel.findByIdAndDelete(id);
  }

}
