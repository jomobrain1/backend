import { Module } from '@nestjs/common';
import { HolidayService } from './holiday.service';
import { HolidayController } from './holiday.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HolidayPackageSchema } from './schemas/HolidayPackage.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Holiday', schema: HolidayPackageSchema },
    ]),
  ],
  controllers: [HolidayController],
  providers: [HolidayService],
})
export class HolidayModule {}
