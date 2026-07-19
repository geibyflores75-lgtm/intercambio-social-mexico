import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
@Injectable()
export class AuthService {
  constructor(@InjectRepository(Usuario) private userRepo: Repository<Usuario>) {}
  async crearUsuario(dto: any, ref?: string) {
    const user = this.userRepo.create({ ...dto, registro_origen: ref || 'directo', monedas: 100 });
    return await this.userRepo.save(user);
  }
}