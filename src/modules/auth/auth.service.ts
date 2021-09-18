import { Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { MyContext } from '../../shared/MyContext';
import { PrismaService } from '../prisma/prisma.service';
import argon2 from 'argon2';
import { AuthMessage } from './dtos/AuthMessage';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    @Inject(CONTEXT) private context: MyContext
  ) {}

  async login(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error(AuthMessage.INCORRECT_CREDENTIALS);
    }

    if ((await argon2.verify(user.password, password)) === false) {
      throw new Error(AuthMessage.NONEXISTENT_ACCOUNT);
    }

    this.context.req.session.userId = user.id;

    return AuthMessage.CREDENTIALS_ACCEPTED;
  }
}
