import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateWithoutCustomerInput } from "../inputs/TransactionCreateWithoutCustomerInput";
import { TransactionUpdateWithoutCustomerInput } from "../inputs/TransactionUpdateWithoutCustomerInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionUpsertWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: TransactionUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutCustomerInput;
}
