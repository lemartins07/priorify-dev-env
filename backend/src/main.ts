import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
  .setTitle('Priorify API')
  .setDescription('API para gerenciar listas de compras')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 4000);

  console.log(`🚀 API rodando em: http://localhost:4000/docs`);
}
bootstrap();