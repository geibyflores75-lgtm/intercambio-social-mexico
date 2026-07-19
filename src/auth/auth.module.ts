import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}