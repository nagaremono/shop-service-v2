import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemCreateManyProductInputEnvelope } from "../inputs/SoldItemCreateManyProductInputEnvelope";
import { SoldItemCreateOrConnectWithoutProductInput } from "../inputs/SoldItemCreateOrConnectWithoutProductInput";
import { SoldItemCreateWithoutProductInput } from "../inputs/SoldItemCreateWithoutProductInput";
import { SoldItemScalarWhereInput } from "../inputs/SoldItemScalarWhereInput";
import { SoldItemUpdateManyWithWhereWithoutProductInput } from "../inputs/SoldItemUpdateManyWithWhereWithoutProductInput";
import { SoldItemUpdateWithWhereUniqueWithoutProductInput } from "../inputs/SoldItemUpdateWithWhereUniqueWithoutProductInput";
import { SoldItemUpsertWithWhereUniqueWithoutProductInput } from "../inputs/SoldItemUpsertWithWhereUniqueWithoutProductInput";
import { SoldItemWhereUniqueInput } from "../inputs/SoldItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [SoldItemCreateWithoutProductInput], {
    nullable: true
  })
  create?: SoldItemCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: SoldItemCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: SoldItemUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => SoldItemCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: SoldItemCreateManyProductInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SoldItemUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: SoldItemUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: SoldItemUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SoldItemScalarWhereInput[] | undefined;
}
