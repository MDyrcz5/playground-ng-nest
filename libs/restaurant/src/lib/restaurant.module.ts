import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './resolvers/restaurant.resolver';
import { Module } from '@nestjs/common';

@Module({
  controllers: [],
  providers: [RestaurantResolver, RestaurantService],
  exports: [],
})
export class RestaurantModule {}
