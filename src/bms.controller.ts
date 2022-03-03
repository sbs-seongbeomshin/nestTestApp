import { Controller, Get } from '@nestjs/common';
import { BmsService } from './bms.service';

@Controller()
export class BmsController {
  constructor(private readonly bmsService: BmsService) {}

  @Get('/bms')
  getBms(): Promise<string> {
    return this.bmsService.getBms();
  }
}
