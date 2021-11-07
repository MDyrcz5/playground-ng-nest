import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLocationInput {
  @Field()
  address: string;

  @Field({ nullable: true })
  coordinates?: string[];
}
