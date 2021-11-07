import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateLocationInput {
  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  coordinates?: string[];
}
