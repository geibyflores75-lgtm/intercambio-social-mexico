import { Controller, Post, Body, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async register(@Body() dto: any, @Query('ref') ref: string) {
    return await this.authService.crearUsuario(dto, ref);
  }
}