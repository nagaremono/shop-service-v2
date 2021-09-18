import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SoldItemListRelationFilter } from "../inputs/SoldItemListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionWhereInput {
  @TypeGraphQL.Field(_type => [TransactionWhereInput], {
    nullable: true
  })
  AND?: TransactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereInput], {
    nullable: true
  })
  OR?: TransactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereInput], {
    nullable: true
  })
  NOT?: TransactionWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  customer?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  customerid?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => SoldItemListRelationFilter, {
    nullable: true
  })
  soldItems?: SoldItemListRelationFilter | undefined;
}
