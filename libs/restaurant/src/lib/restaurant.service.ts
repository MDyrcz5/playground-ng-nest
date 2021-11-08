import { UpdateRestaurantInput } from './dto/update-restaurant.input';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { Restaurant } from './models/restaurant';
import { DataService } from 'libs/data/src/lib/data.service';

@Injectable()
export class RestaurantService {
  constructor(private readonly dataService: DataService) {}

  public getRestaurants() {
    return this.dataService.restaurant.findMany();
  }

  public async getRestaurant(id: string) {
    const restaurant = await this.dataService.restaurant.findFirst({ where: { id } });
    if (!restaurant) {
      throw new NotFoundException(`Restaurant with id ${id} doesn't exists`);
    }
    return restaurant;
  }

  public createRestaurant(input: CreateRestaurantInput) {
    return this.dataService.restaurant.create({
      data: { ...input },
    });
  }

  public async updateRestaurant(input: UpdateRestaurantInput, id: string) {
    const restaurant = await this.getRestaurant(id);
    return this.dataService.restaurant.update({
      where: { id: restaurant.id },
      data: { ...input },
    });
  }

  public async deleteRestaurant(id: string): Promise<boolean> {
    const deletedItem = await this.dataService.restaurant.delete({
      where: {
        id,
      },
    });
    return !!deletedItem;
  }
}
