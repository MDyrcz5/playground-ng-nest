import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field({ nullable: true })
  adress?: String;

  @Field({ nullable: true })
  coordinates?: String;
}
