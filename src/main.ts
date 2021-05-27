import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { AppStaticModule } from './app-static.module';

async function bootstrap() {

  //启动服务器
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8089);

  //启动静态服务器
  const appStatic = await NestFactory.create(AppStaticModule);
  appStatic.enableCors();
  appStatic.use(compression());
  await appStatic.listen(8088);
}
bootstrap();
const a = 1;