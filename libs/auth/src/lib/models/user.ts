import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  email: String;

  @Field({ nullable: true })
  firstName?: String;

  @Field({ nullable: true })
  lastName?: String;

  password: String;
}
