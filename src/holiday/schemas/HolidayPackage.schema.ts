import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Holiday {
  @Prop()
  readonly package_name: string;

  @Prop()
  readonly destination: string;

  @Prop()
  readonly description: string;

  @Prop()
  readonly duration: number;

  @Prop()
  readonly price: number;

  @Prop()
  readonly image_url: string;

  @Prop()
  readonly depature_date: Date;

  @Prop()
  readonly seats: number;
}

export const HolidayPackageSchema = SchemaFactory.createForClass(Holiday);
