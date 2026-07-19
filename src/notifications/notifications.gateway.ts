import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
@WebSocketGateway({ namespace: 'notificaciones' })
export class NotificationsGateway {
  @WebSocketServer() server: Server;
  enviarNotificacionPrivada(userId: string, evento: string, data: any) {
    this.server.emit(evento, data);
  }
}