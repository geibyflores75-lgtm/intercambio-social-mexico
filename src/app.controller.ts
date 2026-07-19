import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return '¡Plataforma de Intercambio Social México está en línea! 🚀🛡️';
  }
}