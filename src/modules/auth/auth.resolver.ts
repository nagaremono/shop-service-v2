import {
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  Args,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { User } from '../../../prisma/generated/type-graphql';
import { authChecker } from '../../middlewares/customAuthChecker';
import { MyContext } from '../../shared/MyContext';
import { AppConfigService } from '../../shared/providers/AppConfigService';
import { PrismaService } from '../prisma/prisma.service';
import { AuthService } from './auth.service';
import { AuthMessage } from './dtos/AuthMessage';
import { LoginArgs } from './dtos/LoginArgs';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private appConfigService: AppConfigService,
    private prismaService: PrismaService
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

  @UseMiddleware(authChecker)
  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    if (!req.session.user) {
      throw new UnauthorizedException();
    }
    return this.prismaService.user.findUnique({
      where: { id: req.session.user.id },
    });
  }

  @UseMiddleware(authChecker)
  @Query(() => String)
  testauth() {
    return 'ok';
  }
}
