import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaccion } from './entities/transaccion.entity';
import { HistorialService } from './historial.service';
import { HistorialController } from './historial.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Transaccion])],
  providers: [HistorialService],
  controllers: [HistorialController],
  exports: [HistorialService],
})
export class HistorialModule {}