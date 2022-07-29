import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { truncate } from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
  );

  app.enableCors({
    origin: ['https://markdown.lizari.space', 'https://web.lizari.space'],
    credentials: true,
    maxAge: 600,
  });

  await app.listen(3001, '0.0.0.0');
}
bootstrap();
