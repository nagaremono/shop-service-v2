import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateOrConnectWithoutSoldItemsInput } from "../inputs/TransactionCreateOrConnectWithoutSoldItemsInput";
import { TransactionCreateWithoutSoldItemsInput } from "../inputs/TransactionCreateWithoutSoldItemsInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionCreateNestedOneWithoutSoldItemsInput {
  @TypeGraphQL.Field(_type => TransactionCreateWithoutSoldItemsInput, {
    nullable: true
  })
  create?: TransactionCreateWithoutSoldItemsInput | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateOrConnectWithoutSoldItemsInput, {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutSoldItemsInput | undefined;

  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput | undefined;
}
