import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
@Entity('transacciones')
export class Transaccion {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() userId: string;
  @CreateDateColumn() fecha: Date;
}