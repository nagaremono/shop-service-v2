import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SoldItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SoldItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SoldItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SoldItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  quantity?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  price?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  images?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  productId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  transactionId?: StringWithAggregatesFilter | undefined;
}
