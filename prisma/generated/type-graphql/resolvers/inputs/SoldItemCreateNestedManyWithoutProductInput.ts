import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemCreateManyProductInputEnvelope } from "../inputs/SoldItemCreateManyProductInputEnvelope";
import { SoldItemCreateOrConnectWithoutProductInput } from "../inputs/SoldItemCreateOrConnectWithoutProductInput";
import { SoldItemCreateWithoutProductInput } from "../inputs/SoldItemCreateWithoutProductInput";
import { SoldItemWhereUniqueInput } from "../inputs/SoldItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [SoldItemCreateWithoutProductInput], {
    nullable: true
  })
  create?: SoldItemCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: SoldItemCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => SoldItemCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: SoldItemCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SoldItemWhereUniqueInput], {
    nullable: true
  })
  connect?: SoldItemWhereUniqueInput[] | undefined;
}
