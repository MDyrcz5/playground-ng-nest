import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateRestaurantInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  imageUrl?: string;
}
