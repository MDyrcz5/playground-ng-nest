import { CtxUser, GqlAuthGuard, User } from '@playground-ng-nest/auth';
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
  createRestaurant(@CtxUser() user: User, @Args('input') input: CreateRestaurantInput) {
    return this.restaurantService.createRestaurant(user.id, input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Restaurant, { nullable: true })
  updateRestaurant(@CtxUser() user: User, @Args('input') input: UpdateRestaurantInput, @Args('id') id: string) {
    return this.restaurantService.updateRestaurant(user.id, input, id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean, { nullable: true })
  deleteRestaurant(@CtxUser() user: User, @Args('id') id: string) {
    return this.restaurantService.deleteRestaurant(user.id, id);
  }
}
