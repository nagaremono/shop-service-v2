import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TransactionRelationFilter } from "../inputs/TransactionRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemWhereInput {
  @TypeGraphQL.Field(_type => [SoldItemWhereInput], {
    nullable: true
  })
  AND?: SoldItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemWhereInput], {
    nullable: true
  })
  OR?: SoldItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemWhereInput], {
    nullable: true
  })
  NOT?: SoldItemWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  productId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TransactionRelationFilter, {
    nullable: true
  })
  transaction?: TransactionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  transactionId?: StringFilter | undefined;
}
