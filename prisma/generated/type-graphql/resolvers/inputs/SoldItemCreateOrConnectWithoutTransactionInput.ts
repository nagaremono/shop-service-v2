import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemCreateWithoutTransactionInput } from "../inputs/SoldItemCreateWithoutTransactionInput";
import { SoldItemWhereUniqueInput } from "../inputs/SoldItemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemCreateOrConnectWithoutTransactionInput {
  @TypeGraphQL.Field(_type => SoldItemWhereUniqueInput, {
    nullable: false
  })
  where!: SoldItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => SoldItemCreateWithoutTransactionInput, {
    nullable: false
  })
  create!: SoldItemCreateWithoutTransactionInput;
}
