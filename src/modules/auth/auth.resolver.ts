import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Resolver } from 'type-graphql';
import { AuthService } from './auth.service';
import { AuthMessage } from './dtos/AuthMessage';
import { LoginArgs } from './dtos/LoginArgs';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthMessage)
  login(@Args() { email, password }: LoginArgs) {
    return this.authService.login(email, password).catch((e) => {
      throw new BadRequestException(e.message);
    });
  }
}
