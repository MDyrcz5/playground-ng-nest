import { RestaurantService } from '../restaurant.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateLocationInput } from '../dto/update-location.input';

@Resolver()
export class LocationResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  // @Mutation(() => Location, { nullable: true })
  // createLocation(@Args('input') input: CreateLocationInput, @Args('restaurantGuid') restaurantGuid) {
  //   return this.restaurantService.createLocation(input, restaurantGuid);
  // }
}
