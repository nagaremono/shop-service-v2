import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class AddToCartInput {
  @Field(() => String)
  productId!: string;

  @Field(() => Int)
  quantity!: number;
}
