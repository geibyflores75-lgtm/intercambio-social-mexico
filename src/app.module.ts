import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TareasModule } from './tareas/tareas.module';
import { IntercambioModule } from './intercambio/intercambio.module';
import { AdminModule } from './admin/admin.module';
import { HistorialModule } from './historial/historial.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true, // Only for development
    }),
    AuthModule,
    TareasModule,
    IntercambioModule,
    AdminModule,
    HistorialModule,
    NotificationsModule,
  ],
})
export class AppModule {}