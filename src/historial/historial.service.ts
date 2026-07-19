import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaccion } from './entities/transaccion.entity';
@Injectable()
export class HistorialService {
  constructor(@InjectRepository(Transaccion) private repo: Repository<Transaccion>) {}
}