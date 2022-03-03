import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Inverter, InverterSchema } from '../schemas/inverter.schema';
import { InverterService } from './inverter.service';
import { InverterController } from './inverter.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Inverter.name, schema: InverterSchema}], 'inverter')],
  controllers: [InverterController],
  providers: [InverterService],
})
export class InverterModule {}