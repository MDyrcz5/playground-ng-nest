import { UpdateRestaurantInput } from './dto/update-restaurant.input';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { DataService } from 'libs/data/src/lib/data.service';

@Injectable()
export class RestaurantService {
  constructor(private readonly dataService: DataService) {}

  public getRestaurants() {
    return this.dataService.restaurant.findMany();
  }

  public async getRestaurant(id: string) {
    const restaurant = await this.dataService.restaurant.findFirst({ where: { id }, include: { author: true } });
    if (!restaurant) {
      throw new NotFoundException(`Restaurant with id ${id} doesn't exists`);
    }
    return restaurant;
  }

  public createRestaurant(userId: string, input: CreateRestaurantInput) {
    return this.dataService.restaurant.create({
      data: { ...input, author: { connect: { id: userId } } },
    });
  }

  public async updateRestaurant(userId: string, input: UpdateRestaurantInput, id: string) {
    const restaurant = await this.getRestaurant(id);
    return this.dataService.restaurant.update({
      where: { id: restaurant.id },
      data: { ...input },
    });
  }

  public async deleteRestaurant(userId: string, id: string): Promise<boolean> {
    // TODO: Check if user can delete a restaurant
    const deletedItem = await this.dataService.restaurant.delete({
      where: {
        id,
      },
    });
    return !!deletedItem;
  }
}
