import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmadeusModule } from './amadeus/amadeus.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [ConfigModule.forRoot(), AmadeusModule, StripeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
