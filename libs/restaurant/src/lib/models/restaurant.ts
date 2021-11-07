import { Field, ObjectType } from '@nestjs/graphql';
import { Location } from './location';

@ObjectType()
export class Restaurant {
  @Field({ nullable: true })
  guid?: String;

  @Field({ nullable: true })
  name?: String;

  @Field({ nullable: true })
  description?: String;

  @Field({ nullable: true })
  imageUrl?: String;

  @Field((type) => [Location], { nullable: true })
  locations?: Location[];
}
