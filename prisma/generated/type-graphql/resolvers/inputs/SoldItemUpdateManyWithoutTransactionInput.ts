import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemCreateManyTransactionInputEnvelope } from "../inputs/SoldItemCreateManyTransactionInputEnvelope";
import { SoldItemCreateOrConnectWithoutTransactionInput } from "../inputs/SoldItemCreateOrConnectWithoutTransactionInput";
import { SoldItemCreateWithoutTransactionInput } from "../inputs/SoldItemCreateWithoutTransactionInput";
import { SoldItemScalarWhereInput } from "../inputs/SoldItemScalarWhereInput";
import { SoldItemUpdateManyWithWhereWithoutTransactionInput } from "../inputs/SoldItemUpdateManyWithWhereWithoutTransactionInput";
import { SoldItemUpdateWithWhereUniqueWithoutTransactionInput } from "../inputs/SoldItemUpdateWithWhereUniqueWithoutTransactionInput";
import { SoldItemUpsertWithWhereUniqueWithoutTransactionInput } from "../inputs/SoldItemUpsertWithWhereUniqueWithoutTransactionInput";
import { SoldItemWhereUniqueInput } from "../inputs/SoldItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemUpdateManyWithoutTransactionInput {
  @TypeGraphQL.Field(_type => [SoldItemCreateWithoutTransactionInput], {
    nullable: true
  })
  create?: SoldItemCreateWithoutTransactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemCreateOrConnectWithoutTransactionInput], {
    nullable: true
  })
  connectOrCreate?: SoldItemCreateOrConnectWithoutTransactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemUpsertWithWhereUniqueWithoutTransactionInput], {
    nullable: true
  })
  upsert?: SoldItemUpsertWithWhereUniqueWithoutTransactionInput[] | undefined;

  @TypeGraphQL.Field(_type => SoldItemCreateManyTransactionInputEnvelope, {
    nullable: true
  })
  createMany?: SoldItemCreateManyTransactionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SoldItemWhereUniqueInput], {
    nullable: true
  })
  connect?: SoldItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemWhereUniqueInput], {
    nullable: true
  })
  set?: SoldItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SoldItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemWhereUniqueInput], {
    nullable: true
  })
  delete?: SoldItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemUpdateWithWhereUniqueWithoutTransactionInput], {
    nullable: true
  })
  update?: SoldItemUpdateWithWhereUniqueWithoutTransactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemUpdateManyWithWhereWithoutTransactionInput], {
    nullable: true
  })
  updateMany?: SoldItemUpdateManyWithWhereWithoutTransactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SoldItemScalarWhereInput[] | undefined;
}
