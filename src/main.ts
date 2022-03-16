import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.modules';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Crypto API')
    .setDescription('Application for coin management')
    .setVersion('1.0')
    .addTag('Coins', 'Endpoint related to crypto information.')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.SERVER_PORT || 3000);
}
bootstrap();
