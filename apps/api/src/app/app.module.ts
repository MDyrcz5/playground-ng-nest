import { DataModule } from '@playground-ng-nest/data';
import { AuthModule } from '@playground-ng-nest/auth';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '@playground-ng-nest/core';
import { RestaurantModule } from '@playground-ng-nest/restaurant';

@Module({
  imports: [CoreModule, RestaurantModule, DataModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
