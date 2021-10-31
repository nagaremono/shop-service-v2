import { Field, Int, ObjectType } from 'type-graphql';
import { Product } from '../../../../prisma/generated/type-graphql';

export interface RedisCart {
  [k: string]: string;
}

@ObjectType()
export class CartItem {
  @Field(() => Product)
  product!: Product;

  @Field(() => Int)
  quantity!: number;
}
