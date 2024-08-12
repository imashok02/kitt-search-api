import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmadeusModule } from './amadeus/amadeus.module';

@Module({
  imports: [AmadeusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
