import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemCreateManyTransactionInputEnvelope } from "../inputs/SoldItemCreateManyTransactionInputEnvelope";
import { SoldItemCreateOrConnectWithoutTransactionInput } from "../inputs/SoldItemCreateOrConnectWithoutTransactionInput";
import { SoldItemCreateWithoutTransactionInput } from "../inputs/SoldItemCreateWithoutTransactionInput";
import { SoldItemWhereUniqueInput } from "../inputs/SoldItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemCreateNestedManyWithoutTransactionInput {
  @TypeGraphQL.Field(_type => [SoldItemCreateWithoutTransactionInput], {
    nullable: true
  })
  create?: SoldItemCreateWithoutTransactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemCreateOrConnectWithoutTransactionInput], {
    nullable: true
  })
  connectOrCreate?: SoldItemCreateOrConnectWithoutTransactionInput[] | undefined;

  @TypeGraphQL.Field(_type => SoldItemCreateManyTransactionInputEnvelope, {
    nullable: true
  })
  createMany?: SoldItemCreateManyTransactionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SoldItemWhereUniqueInput], {
    nullable: true
  })
  connect?: SoldItemWhereUniqueInput[] | undefined;
}
