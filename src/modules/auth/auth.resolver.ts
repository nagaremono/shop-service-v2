import { BadRequestException } from '@nestjs/common';
import { Args, Ctx, Mutation, Resolver } from 'type-graphql';
import { MyContext } from '../../shared/MyContext';
import { AuthService } from './auth.service';
import { AuthMessage } from './dtos/AuthMessage';
import { LoginArgs } from './dtos/LoginArgs';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthMessage)
  login(@Args() { email, password }: LoginArgs, @Ctx() { req }: MyContext) {
    return this.authService.login(email, password, req).catch((e) => {
      throw new BadRequestException(e.message);
    });
  }
}
