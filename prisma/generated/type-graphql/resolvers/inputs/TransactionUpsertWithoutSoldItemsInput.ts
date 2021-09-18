import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateWithoutSoldItemsInput } from "../inputs/TransactionCreateWithoutSoldItemsInput";
import { TransactionUpdateWithoutSoldItemsInput } from "../inputs/TransactionUpdateWithoutSoldItemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionUpsertWithoutSoldItemsInput {
  @TypeGraphQL.Field(_type => TransactionUpdateWithoutSoldItemsInput, {
    nullable: false
  })
  update!: TransactionUpdateWithoutSoldItemsInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutSoldItemsInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutSoldItemsInput;
}
