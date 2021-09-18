import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemCreateWithoutTransactionInput } from "../inputs/SoldItemCreateWithoutTransactionInput";
import { SoldItemUpdateWithoutTransactionInput } from "../inputs/SoldItemUpdateWithoutTransactionInput";
import { SoldItemWhereUniqueInput } from "../inputs/SoldItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemUpsertWithWhereUniqueWithoutTransactionInput {
  @TypeGraphQL.Field(_type => SoldItemWhereUniqueInput, {
    nullable: false
  })
  where!: SoldItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => SoldItemUpdateWithoutTransactionInput, {
    nullable: false
  })
  update!: SoldItemUpdateWithoutTransactionInput;

  @TypeGraphQL.Field(_type => SoldItemCreateWithoutTransactionInput, {
    nullable: false
  })
  create!: SoldItemCreateWithoutTransactionInput;
}
