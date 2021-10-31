import { Injectable } from '@nestjs/common';
import { RedisProvider } from '../../shared/providers/redis.provider';
import { PrismaService } from '../prisma/prisma.service';
import { CartItem, RedisCart } from './types/Cart';

@Injectable()
export class CartService {
  constructor(
    private readonly redis: RedisProvider,
    private readonly prismaService: PrismaService
  ) {}

  async addToCart(customerId: number, productId: string, quantity: number) {
    await this.redis.hset(`cart:${customerId.toString()}`, {
      [productId]: quantity.toString(),
    });
  }

  async getCustomerCartFromRedis(customerId: number): Promise<RedisCart> {
    return new Promise((resolve, reject) => {
      this.redis.hgetall(`cart:${customerId.toString()}`, (err, res) => {
        if (err) reject(err);

        resolve(res);
      });
    });
  }

  async getCustomerCartFromPostgres(cart: RedisCart): Promise<CartItem[]> {
    const productIds = Object.keys(cart);

    const products = await this.prismaService.product.findMany({
      where: {
        id: { in: productIds },
      },
    });

    return products.map((p) => {
      return {
        product: p,
        quantity: parseInt(cart[p.id], 10),
      };
    });
  }
}
