import { DataModule } from '@playground-ng-nest/data';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './resolvers/restaurant.resolver';
import { Module } from '@nestjs/common';

@Module({
  controllers: [],
  imports: [DataModule],
  providers: [RestaurantResolver, RestaurantService],
  exports: [],
})
export class RestaurantModule {}
