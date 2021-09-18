import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionScalarWhereInput {
  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  AND?: TransactionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  OR?: TransactionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  NOT?: TransactionScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  totalAmount?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  paymentStatus?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  customerid?: IntFilter | undefined;
}
