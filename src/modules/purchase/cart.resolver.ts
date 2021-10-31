import { UnauthorizedException } from '@nestjs/common';
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { authChecker } from '../../middlewares/customAuthChecker';
import { MyContext } from '../../shared/MyContext';
import { CartService } from './cart.service';
import { AddToCartInput } from './dtos/addToCartArgs';
import { CartItem } from './types/Cart';

@Resolver()
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  @UseMiddleware(authChecker)
  @Mutation(() => [CartItem], { nullable: true })
  async addToCart(
    @Arg('data') { productId, quantity }: AddToCartInput,
    @Ctx() { req }: MyContext
  ) {
    if (!req.session.user) {
      throw new UnauthorizedException();
    }

    const customerId = req.session.user.id;

    await this.cartService.addToCart(customerId, productId, quantity);

    const customerCart = await this.cartService.getCustomerCartFromRedis(
      customerId
    );

    return this.cartService.getCustomerCartFromPostgres(customerCart);
  }

  @UseMiddleware(authChecker)
  @Query(() => [CartItem, { nullable: true }])
  async getMyCart(@Ctx() { req }: MyContext) {
    if (!req.session.user) {
      throw new UnauthorizedException();
    }

    const customerCart = await this.cartService.getCustomerCartFromRedis(
      req.session.user.id
    );
    return this.cartService.getCustomerCartFromPostgres(customerCart);
  }
}
