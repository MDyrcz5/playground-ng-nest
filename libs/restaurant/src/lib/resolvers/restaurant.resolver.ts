import { GqlAuthGuard } from '@playground-ng-nest/auth';
import { RestaurantService } from '../restaurant.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Restaurant } from '../models/restaurant';
import { CreateRestaurantInput } from '../dto/create-restaurant.input';
import { UpdateRestaurantInput } from '../dto/update-restaurant.input';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => [Restaurant], { nullable: true })
  restaurants() {
    return this.restaurantService.getRestaurants();
  }

  @Query(() => Restaurant, { nullable: true })
  restaurant(@Args('id') id: string) {
    return this.restaurantService.getRestaurant(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Restaurant, { nullable: true })
  createRestaurant(@Args('input') input: CreateRestaurantInput) {
    return this.restaurantService.createRestaurant(input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Restaurant, { nullable: true })
  updateRestaurant(@Args('input') input: UpdateRestaurantInput, @Args('id') id: string) {
    return this.restaurantService.updateRestaurant(input, id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean, { nullable: true })
  deleteRestaurant(@Args('id') id: string) {
    return this.restaurantService.deleteRestaurant(id);
  }
}
