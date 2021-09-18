import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemUpdateWithoutTransactionInput } from "../inputs/SoldItemUpdateWithoutTransactionInput";
import { SoldItemWhereUniqueInput } from "../inputs/SoldItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemUpdateWithWhereUniqueWithoutTransactionInput {
  @TypeGraphQL.Field(_type => SoldItemWhereUniqueInput, {
    nullable: false
  })
  where!: SoldItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => SoldItemUpdateWithoutTransactionInput, {
    nullable: false
  })
  data!: SoldItemUpdateWithoutTransactionInput;
}
