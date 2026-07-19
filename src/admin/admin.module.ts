import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../auth/usuario.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}