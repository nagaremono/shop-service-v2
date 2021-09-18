import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import session from 'express-session';
import { AppConfigService } from '../shared/providers/AppConfigService';
import Redis from 'ioredis';
import connectRedis from 'connect-redis';
import { THREE_MONTH_IN_MILISECONDS } from '../shared/constants';

const RedisStore = connectRedis(session);

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  private readonly redis;
  private readonly cookieName;
  private readonly sessionSecret;

  constructor(private readonly appConfigService: AppConfigService) {
    this.redis = new Redis(this.appConfigService.redisUrl);
    this.cookieName = this.appConfigService.cookieName;
    this.sessionSecret = this.appConfigService.sessionSecret;
  }

  use(req: Request, res: Response, next: NextFunction): void {
    session({
      name: this.cookieName,
      store: new RedisStore({ client: this.redis, disableTouch: true }),
      secret: this.sessionSecret,
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
