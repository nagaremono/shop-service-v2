import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TransactionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TransactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TransactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TransactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  totalAmount?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  paymentStatus?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  customerid?: IntWithAggregatesFilter | undefined;
}
