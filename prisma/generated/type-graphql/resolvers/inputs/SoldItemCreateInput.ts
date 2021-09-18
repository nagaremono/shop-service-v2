import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutSoldItemsInput } from "../inputs/ProductCreateNestedOneWithoutSoldItemsInput";
import { TransactionCreateNestedOneWithoutSoldItemsInput } from "../inputs/TransactionCreateNestedOneWithoutSoldItemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  price!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  images?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutSoldItemsInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutSoldItemsInput;

  @TypeGraphQL.Field(_type => TransactionCreateNestedOneWithoutSoldItemsInput, {
    nullable: false
  })
  transaction!: TransactionCreateNestedOneWithoutSoldItemsInput;
}
