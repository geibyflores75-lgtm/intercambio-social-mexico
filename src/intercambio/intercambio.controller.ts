import { Controller, Get } from '@nestjs/common';
import { IntercambioService } from './intercambio.service';
@Controller('intercambio')
export class IntercambioController {
  constructor(private readonly intercambioService: IntercambioService) {}
  @Get('check')
  check() { return { status: 'ok' }; }
}