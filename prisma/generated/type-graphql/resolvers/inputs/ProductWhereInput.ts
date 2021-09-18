import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { SoldItemListRelationFilter } from "../inputs/SoldItemListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductWhereInput {
  @TypeGraphQL.Field(_type => [ProductWhereInput], {
    nullable: true
  })
  AND?: ProductWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereInput], {
    nullable: true
  })
  OR?: ProductWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereInput], {
    nullable: true
  })
  NOT?: ProductWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stock?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  price?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  images?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => SoldItemListRelationFilter, {
    nullable: true
  })
  soldItems?: SoldItemListRelationFilter | undefined;
}
