import { PrismaClient } from '.prisma/client';
import { Request, Response } from 'express';
import { User } from '../../prisma/generated/type-graphql';

export interface MyContext {
  prisma: PrismaClient;
  req: Request;
  res: Response;
  user?: User;
}
