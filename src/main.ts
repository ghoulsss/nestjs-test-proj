import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT ?? 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port ?? 3000);

  console.log(`Server start on http://localhost:${port}`);
  console.log(`Swagger on http://localhost:${port}/api#`);
}
bootstrap();
