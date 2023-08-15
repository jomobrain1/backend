import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
   
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    origin: [
      'https://polite-kheer-7d4120.netlify.app/holidays',
      'https://polite-kheer-7d4120.netlify.app/',
      'https://backend-gules-phi.vercel.app/holidays',
      'https://backend-gules-phi.vercel.app/holidays',
      
    ],
  });
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Tripitaca CRUD ')
    .setDescription('Tripitaca API description')
    .setVersion('1.0')
    .addTag('tripitaca')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(4020);
}
bootstrap();
