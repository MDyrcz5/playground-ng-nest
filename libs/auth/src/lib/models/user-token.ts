import { ObjectType, Field } from '@nestjs/graphql';
import { User } from './user';

@ObjectType()
export class UserToken {
  @Field()
  token: String;

  @Field()
  user: User;
}
