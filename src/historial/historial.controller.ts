import { Controller, Get, Query, Request, UseGuards } from '@nestjs/common';
import { HistorialService } from './historial.service';
@Controller('historial')
export class HistorialController {
  constructor(private readonly historialService: HistorialService) {}
  @Get()
  getHistory(@Query('page') page: number = 1) {
    return { data: [], total: 0 };
  }
}