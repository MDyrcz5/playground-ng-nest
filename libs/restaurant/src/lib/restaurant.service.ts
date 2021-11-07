import { CreateLocationInput } from './dto/update-location.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';
import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { Restaurant } from './models/restaurant';

@Injectable()
export class RestaurantService {
  items: Restaurant[] = [
    {
      guid: 'test-1',
      name: 'McDonalds',
      locations: [{ id: '1', address: 'Random street 22', coordinates: ['34', '12'] }],
    },
    { guid: 'test-2', name: 'Nulio', locations: [{ id: '1', address: 'Random street 32', coordinates: ['54', '32'] }] },
    { guid: 'test-3', name: 'Piko', locations: [{ id: '1', address: 'Random street 42', coordinates: ['14', '67'] }] },
  ];

  public getRestaurants(): Restaurant[] {
    return this.items;
  }

  public getRestaurant(guid: string): Restaurant {
    return this.items.find((item) => item.guid === guid);
  }

  public createRestaurant(input: CreateRestaurantInput): Restaurant {
    const newRestaurant = {
      guid: `test-${randomInt(4, 50)}`,
      ...input,
    };
    this.items.push(newRestaurant);
    return newRestaurant;
  }

  public updateRestaurant(input: UpdateRestaurantInput, guid: string): Restaurant {
    const restaurant = this.getRestaurant(guid);
    const updatedRestaurant = {
      ...restaurant,
      ...input,
    };
    this.items = this.items.map((item) => {
      if (item.guid === guid) {
        return updatedRestaurant;
      }
      return item;
    });

    return updatedRestaurant;
  }

  public deleteRestaurant(guid: string): Boolean {
    const restaurant = this.getRestaurant(guid);
    if (!restaurant) {
      return false;
    }
    this.items = this.items.filter((item) => item.guid !== guid);
    return true;
  }

  // public createLocation(input: CreateLocationInput, restaurantGuid: string): Location {
  //   const newLocation = {
  //     id: Date.now().toString(),
  //     ...input,
  //   };
  //   const restaurant = this.getRestaurant(restaurantGuid);
  // }
}
