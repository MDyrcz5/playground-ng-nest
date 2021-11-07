import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field({ nullable: true })
  id?: String;

  @Field({ nullable: true })
  address?: String;

  @Field((type) => [String], { nullable: true })
  coordinates?: String[];
}
