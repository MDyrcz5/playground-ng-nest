import { UserToken } from './models/user-token';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthLoginInput, AuthRegisterInput } from './dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => UserToken)
  login(@Args({ name: 'input', type: () => AuthLoginInput }) input: AuthLoginInput) {
    return this.authService.login(input);
  }

  @Mutation(() => UserToken)
  register(@Args({ name: 'input', type: () => AuthRegisterInput }) input: AuthRegisterInput) {
    return this.authService.register(input);
  }
}
