import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Bms, BmsSchema } from './schemas/bms.schema';
import { BmsService } from './bms.service';
import { BmsController } from './bms.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bms.name, schema: BmsSchema}], 'bms')],
  controllers: [BmsController],
  providers: [BmsService],
})
export class BmsModule {}