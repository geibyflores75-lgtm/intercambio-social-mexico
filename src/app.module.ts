import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
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
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
    AuthModule,
    TareasModule,
    IntercambioModule,
    AdminModule,
    HistorialModule,
    NotificationsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}