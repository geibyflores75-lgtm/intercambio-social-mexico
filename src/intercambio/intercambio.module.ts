import { Module } from '@nestjs/common';
import { IntercambioService } from './intercambio.service';
import { IntercambioController } from './intercambio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../auth/usuario.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [IntercambioService],
  controllers: [IntercambioController],
})
export class IntercambioModule {}