import { Args, Mutation, Resolver } from 'type-graphql';
import { AuthService } from './auth.service';
import { LoginArgs } from './dtos/LoginArgs';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  login(@Args() { email, password }: LoginArgs) {
    return this.authService.login(email, password);
  }
}
