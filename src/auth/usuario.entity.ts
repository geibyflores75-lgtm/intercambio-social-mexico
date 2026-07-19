import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from 'typeorm';
@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() email: string;
  @Column({ default: 100 }) monedas: number;
  @Index() @Column({ default: 'directo' }) registro_origen: string;
  @Column({ default: true }) estado_activo: boolean;
  @CreateDateColumn() fecha_creacion: Date;
}