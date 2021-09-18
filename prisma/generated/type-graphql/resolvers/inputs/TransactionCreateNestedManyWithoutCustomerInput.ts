import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateManyCustomerInputEnvelope } from "../inputs/TransactionCreateManyCustomerInputEnvelope";
import { TransactionCreateOrConnectWithoutCustomerInput } from "../inputs/TransactionCreateOrConnectWithoutCustomerInput";
import { TransactionCreateWithoutCustomerInput } from "../inputs/TransactionCreateWithoutCustomerInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;
}
