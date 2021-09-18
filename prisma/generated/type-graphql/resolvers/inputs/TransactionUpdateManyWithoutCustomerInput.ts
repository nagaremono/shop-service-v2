import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateManyCustomerInputEnvelope } from "../inputs/TransactionCreateManyCustomerInputEnvelope";
import { TransactionCreateOrConnectWithoutCustomerInput } from "../inputs/TransactionCreateOrConnectWithoutCustomerInput";
import { TransactionCreateWithoutCustomerInput } from "../inputs/TransactionCreateWithoutCustomerInput";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutCustomerInput } from "../inputs/TransactionUpdateManyWithWhereWithoutCustomerInput";
import { TransactionUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/TransactionUpdateWithWhereUniqueWithoutCustomerInput";
import { TransactionUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/TransactionUpsertWithWhereUniqueWithoutCustomerInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionUpdateManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: TransactionUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  set?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  delete?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: TransactionUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: TransactionUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TransactionScalarWhereInput[] | undefined;
}
