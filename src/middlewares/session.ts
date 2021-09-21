import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import session from 'express-session';
import { AppConfigService } from '../shared/providers/AppConfigService';
import connectRedis from 'connect-redis';
import { THREE_MONTH_IN_MILISECONDS } from '../shared/constants';
import { RedisProvider } from '../shared/providers/redis.provider';

const RedisStore = connectRedis(session);

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  constructor(
    private readonly appConfigService: AppConfigService,
    private readonly redisProvider: RedisProvider
  ) {}

  use(req: Request, res: Response, next: NextFunction): void {
    session({
      name: this.appConfigService.cookieName,
      store: new RedisStore({ client: this.redisProvider, disableTouch: true }),
      secret: this.appConfigService.sessionSecret,
      resave: false,
      cookie: {
        maxAge: THREE_MONTH_IN_MILISECONDS,
        httpOnly: true,
        sameSite: 'strict',
        secure: this.appConfigService.nodeEnv === 'production',
      },
      saveUninitialized: false,
    })(req, res, next);
  }
}
