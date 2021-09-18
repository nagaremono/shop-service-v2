import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateOrConnectWithoutSoldItemsInput } from "../inputs/TransactionCreateOrConnectWithoutSoldItemsInput";
import { TransactionCreateWithoutSoldItemsInput } from "../inputs/TransactionCreateWithoutSoldItemsInput";
import { TransactionUpdateWithoutSoldItemsInput } from "../inputs/TransactionUpdateWithoutSoldItemsInput";
import { TransactionUpsertWithoutSoldItemsInput } from "../inputs/TransactionUpsertWithoutSoldItemsInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionUpdateOneRequiredWithoutSoldItemsInput {
  @TypeGraphQL.Field(_type => TransactionCreateWithoutSoldItemsInput, {
    nullable: true
  })
  create?: TransactionCreateWithoutSoldItemsInput | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateOrConnectWithoutSoldItemsInput, {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutSoldItemsInput | undefined;

  @TypeGraphQL.Field(_type => TransactionUpsertWithoutSoldItemsInput, {
    nullable: true
  })
  upsert?: TransactionUpsertWithoutSoldItemsInput | undefined;

  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TransactionUpdateWithoutSoldItemsInput, {
    nullable: true
  })
  update?: TransactionUpdateWithoutSoldItemsInput | undefined;
}
