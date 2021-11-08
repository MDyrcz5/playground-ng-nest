import { DataModule } from '@playground-ng-nest/data';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '@playground-ng-nest/core';
import { RestaurantModule } from '@playground-ng-nest/restaurant';

@Module({
  imports: [CoreModule, RestaurantModule, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
