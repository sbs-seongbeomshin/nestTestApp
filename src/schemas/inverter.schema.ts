import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InverterDocument = Inverter & Document;

@Schema()
export class Inverter {
  @Prop()
  mcno: number;
}

export const InverterSchema = SchemaFactory.createForClass(Inverter);