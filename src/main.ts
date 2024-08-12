import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as csurf from "csurf";
import * as express from "express";


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });


  enableCors(app);
  app.use(express.json({ limit: "10mb" }));
  const serverApp = await app.listen(4000, "0.0.0.0").then(server => {
  
    // logger.log(`🚀 Server is UP! [Env: ${config.get<string>("NODE_ENV")}] [Port: ${config.get<string>("PORT")}]`);
    server.keepAliveTimeout = 60 * 1000; // 60s

    return server;
  });

  app.use(csurf());
}

function enableCors(app: NestExpressApplication): void {
  app.enableCors({
    origin: '*',
    // methods: "GET,PUT,PATCH,POST",
    credentials: true
  });
}


bootstrap();
