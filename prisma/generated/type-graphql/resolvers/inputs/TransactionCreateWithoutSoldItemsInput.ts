import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutPurchasesInput } from "../inputs/UserCreateNestedOneWithoutPurchasesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionCreateWithoutSoldItemsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  totalAmount!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  paymentStatus!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPurchasesInput, {
    nullable: false
  })
  customer!: UserCreateNestedOneWithoutPurchasesInput;
}
