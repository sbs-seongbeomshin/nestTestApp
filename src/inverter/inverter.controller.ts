import { Controller, Get } from '@nestjs/common';
import { InverterService } from './inverter.service';

@Controller()
export class InverterController {
  constructor(private readonly inverterService: InverterService) {}

  @Get('/inverter')
  getInverter(): Promise<string> {
    return this.inverterService.getInverter();
  }
}
