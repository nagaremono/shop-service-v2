import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemScalarWhereInput {
  @TypeGraphQL.Field(_type => [SoldItemScalarWhereInput], {
    nullable: true
  })
  AND?: SoldItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemScalarWhereInput], {
    nullable: true
  })
  OR?: SoldItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemScalarWhereInput], {
    nullable: true
  })
  NOT?: SoldItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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
  quantity?: IntFilter | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  productId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  transactionId?: StringFilter | undefined;
}
