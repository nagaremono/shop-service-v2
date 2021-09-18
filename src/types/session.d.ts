import 'express-session';
import { User } from '../../prisma/generated/type-graphql';

declare module 'express-session' {
  export interface SessionData {
    user: User;
  }
}
