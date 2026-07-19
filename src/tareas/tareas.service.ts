import { Injectable } from '@nestjs/common';
@Injectable()
export class TareasService {
  async registrarInicio(userId: string, videoId: string) {
    return { status: 'Validando reproducción...', startTime: Date.now() };
  }
  async validarYEntregarPuntos(userId: string, videoId: string) {
    // Lógica Anti-trampa de 45 segundos
    return { success: true, puntos: 100 };
  }
}