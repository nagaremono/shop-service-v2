import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SoldItemOrderByWithAggregationInput } from "../../../inputs/SoldItemOrderByWithAggregationInput";
import { SoldItemScalarWhereWithAggregatesInput } from "../../../inputs/SoldItemScalarWhereWithAggregatesInput";
import { SoldItemWhereInput } from "../../../inputs/SoldItemWhereInput";
import { SoldItemScalarFieldEnum } from "../../../../enums/SoldItemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySoldItemArgs {
  @TypeGraphQL.Field(_type => SoldItemWhereInput, {
    nullable: true
  })
  where?: SoldItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SoldItemOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SoldItemOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SoldItemScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "quantity" | "price" | "name" | "images" | "productId" | "transactionId">;

  @TypeGraphQL.Field(_type => SoldItemScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SoldItemScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
