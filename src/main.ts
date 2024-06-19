import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from 'src/app.module';
import * as morgan from 'morgan';
import { CORS } from 'src/common/infraestructure/constants/cors';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));
  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const configService = app.get(ConfigService);

  app.enableCors(CORS);
  app.setGlobalPrefix('api');

  await app.listen(configService.get('APP_PORT'));

  console.log('Application PORT:', configService.get('APP_PORT'));
}
bootstrap();
