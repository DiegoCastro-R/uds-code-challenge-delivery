import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: '*',
  }
  
  app.enableCors(corsOptions);
  await app.listen(process.env.APP_PORT ?? 4000);
}
bootstrap();
