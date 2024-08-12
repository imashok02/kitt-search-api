import { Module } from '@nestjs/common';
import { AmadeusController } from './amadeus.controller';

@Module({
  controllers: [AmadeusController],
})
export class AmadeusModule {}
