import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  // AQUÍ PEGAS EL CÓDIGO
  app.getHttpAdapter().get('/', (req, res) => {
    res.send('<html><head><meta name="google-site-verification" content="qa1u4q-stlVHh8E0OD4xZgFutfU_BRVHDpuMJQFNbgk" /></head><body>Intercambio Social Mexico</body></html>');
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

 