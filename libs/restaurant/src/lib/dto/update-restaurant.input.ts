import { InputType, Field } from '@nestjs/graphql';
import { Location } from '../models/location';

@InputType()
export class UpdateRestaurantInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field((type) => [Location], { nullable: true })
  locations?: Location[];
}
