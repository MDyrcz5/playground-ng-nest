import { RestaurantService } from './restaurant.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Restaurant } from './models/restaurant';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';

@Resolver()
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => [Restaurant], { nullable: true })
  restaurants() {
    return this.restaurantService.getRestaurants();
  }

  @Query(() => Restaurant, { nullable: true })
  restaurant(@Args('guid') guid: string) {
    return this.restaurantService.getRestaurant(guid);
  }

  @Mutation(() => Restaurant, { nullable: true })
  createRestaurant(@Args('input') input: CreateRestaurantInput) {
    return this.restaurantService.createRestaurant(input);
  }

  @Mutation(() => Restaurant, { nullable: true })
  updateRestaurant(@Args('input') input: UpdateRestaurantInput, @Args('guid') guid: string) {
    return this.restaurantService.updateRestaurant(input, guid);
  }

  @Mutation(() => Boolean, { nullable: true })
  deleteRestaurant(@Args('guid') guid: string) {
    return this.restaurantService.deleteRestaurant(guid);
  }
}
