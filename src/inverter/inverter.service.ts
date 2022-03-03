import { Connection, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Inverter, InverterDocument } from '../schemas/inverter.schema';

@Injectable()
export class InverterService {
  constructor(@InjectModel(Inverter.name) private readonly inverterDocument: Model<InverterDocument>) {}

  async getInverter(): Promise<string> {
    const res = await this.inverterDocument.findOne().exec();
    console.log(res);
    console.log('inverter');
    return 'inverter'
  }
}
