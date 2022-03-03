import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BmsDocument = Bms & Document;

@Schema()
export class Bms {
  @Prop()
  mcno: number;
}

export const BmsSchema = SchemaFactory.createForClass(Bms);