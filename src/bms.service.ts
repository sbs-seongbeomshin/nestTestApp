import { Connection, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bms, BmsDocument } from './schemas/bms.schema';

@Injectable()
export class BmsService {
  constructor(@InjectModel(Bms.name) private readonly bmsDocument: Model<BmsDocument>) {}

  async getBms(): Promise<string> {
    const res = await this.bmsDocument.findOne().exec();
    console.log(res);
    console.log('bms');
    return 'bms'
  }
}
