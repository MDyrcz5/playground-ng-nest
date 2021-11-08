import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field({ nullable: true })
  id?: String;

  @Field({ nullable: true })
  name?: String;

  @Field({ nullable: true })
  description?: String;

  @Field({ nullable: true })
  imageUrl?: String;
}
