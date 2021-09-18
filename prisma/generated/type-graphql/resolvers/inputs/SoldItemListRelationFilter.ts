import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemWhereInput } from "../inputs/SoldItemWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemListRelationFilter {
  @TypeGraphQL.Field(_type => SoldItemWhereInput, {
    nullable: true
  })
  every?: SoldItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => SoldItemWhereInput, {
    nullable: true
  })
  some?: SoldItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => SoldItemWhereInput, {
    nullable: true
  })
  none?: SoldItemWhereInput | undefined;
}
