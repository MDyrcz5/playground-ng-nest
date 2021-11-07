import { LocationResolver } from './resolvers/location.resolver';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './resolvers/restaurant.resolver';
import { Module } from '@nestjs/common';

@Module({
  controllers: [],
  providers: [RestaurantResolver, RestaurantService, LocationResolver],
  exports: [],
})
export class RestaurantModule {}
