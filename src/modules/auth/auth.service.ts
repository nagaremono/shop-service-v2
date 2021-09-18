import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import argon2 from 'argon2';
import { AuthMessage } from './dtos/AuthMessage';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async login(email: string, password: string, req: Request) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error(AuthMessage.INCORRECT_CREDENTIALS);
    }

    if ((await argon2.verify(user.password, password)) === false) {
      throw new Error(AuthMessage.NONEXISTENT_ACCOUNT);
    }

    req.session.userId = user.id;

    return AuthMessage.CREDENTIALS_ACCEPTED;
  }
}
