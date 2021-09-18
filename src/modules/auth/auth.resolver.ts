import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Args, Ctx, Mutation, Resolver } from 'type-graphql';
import { MyContext } from '../../shared/MyContext';
import { AppConfigService } from '../../shared/providers/AppConfigService';
import { AuthService } from './auth.service';
import { AuthMessage } from './dtos/AuthMessage';
import { LoginArgs } from './dtos/LoginArgs';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private appConfigService: AppConfigService
  ) {}

  @Mutation(() => AuthMessage)
  login(@Args() { email, password }: LoginArgs, @Ctx() { req }: MyContext) {
    return this.authService.login(email, password, req).catch((e) => {
      throw new BadRequestException(e.message);
    });
  }

  @Mutation(() => AuthMessage)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          return reject(
            new InternalServerErrorException('Something went wrong.')
          );
        }
        res.clearCookie(this.appConfigService.cookieName);

        return resolve(AuthMessage.LOGGED_OUT);
      });
    });
  }
}
