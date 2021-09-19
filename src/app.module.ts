import { PrismaClient } from '.prisma/client';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import path from 'path';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import {
  ProductCrudResolver,
  ProductRelationsResolver,
  UserCrudResolver,
  UserRelationsResolver,
  TransactionRelationsResolver,
  TransactionCrudResolver,
  SoldItemCrudResolver,
  SoldItemRelationsResolver,
} from '../prisma/generated/type-graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionMiddleware } from './middlewares/session';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { MyContext } from './shared/MyContext';
import { AppConfigService } from './shared/providers/AppConfigService';

const prisma = new PrismaClient();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeGraphQLModule.forRoot({
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
      emitSchemaFile: path.join(process.cwd(), 'src/schema.graphql'),
      validate: false,
      dateScalarMode: 'isoDate',
      playground: true,
      introspection: true,
      path: '/',
      context: ({ req, res }): MyContext => ({
        prisma,
        req,
        res,
        user: req.session.user,
      }),
    }),
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AppConfigService,
    UserCrudResolver,
    UserRelationsResolver,
    ProductCrudResolver,
    ProductRelationsResolver,
    TransactionRelationsResolver,
    TransactionCrudResolver,
    SoldItemCrudResolver,
    SoldItemRelationsResolver,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SessionMiddleware).forRoutes('*');
  }
}
