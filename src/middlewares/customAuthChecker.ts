import { UnauthorizedException } from '@nestjs/common';
import { MiddlewareFn } from 'type-graphql';
import { AuthMessage } from '../modules/auth/dtos/AuthMessage';
import { MyContext } from '../shared/MyContext';

export const authChecker: MiddlewareFn = ({ context }, next) => {
  if (!!(context as MyContext).req.session.user === false) {
    throw new UnauthorizedException(AuthMessage.UNAUTHORIZED);
  }
  return next();
};
