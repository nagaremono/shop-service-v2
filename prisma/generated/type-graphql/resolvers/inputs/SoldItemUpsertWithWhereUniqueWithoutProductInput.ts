import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemCreateWithoutProductInput } from "../inputs/SoldItemCreateWithoutProductInput";
import { SoldItemUpdateWithoutProductInput } from "../inputs/SoldItemUpdateWithoutProductInput";
import { SoldItemWhereUniqueInput } from "../inputs/SoldItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => SoldItemWhereUniqueInput, {
    nullable: false
  })
  where!: SoldItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => SoldItemUpdateWithoutProductInput, {
    nullable: false
  })
  update!: SoldItemUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => SoldItemCreateWithoutProductInput, {
    nullable: false
  })
  create!: SoldItemCreateWithoutProductInput;
}
