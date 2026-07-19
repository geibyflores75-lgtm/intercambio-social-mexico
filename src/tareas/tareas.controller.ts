import { Controller, Get } from '@nestjs/common';
import { TareasService } from './tareas.service';
@Controller('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}
  @Get('check')
  check() { return { status: 'ok' }; }
}