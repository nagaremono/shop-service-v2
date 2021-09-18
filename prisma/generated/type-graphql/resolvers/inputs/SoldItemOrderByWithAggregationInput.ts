import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemAvgOrderByAggregateInput } from "../inputs/SoldItemAvgOrderByAggregateInput";
import { SoldItemCountOrderByAggregateInput } from "../inputs/SoldItemCountOrderByAggregateInput";
import { SoldItemMaxOrderByAggregateInput } from "../inputs/SoldItemMaxOrderByAggregateInput";
import { SoldItemMinOrderByAggregateInput } from "../inputs/SoldItemMinOrderByAggregateInput";
import { SoldItemSumOrderByAggregateInput } from "../inputs/SoldItemSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  images?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  productId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  transactionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SoldItemCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SoldItemCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SoldItemAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SoldItemAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SoldItemMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SoldItemMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SoldItemMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SoldItemMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SoldItemSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SoldItemSumOrderByAggregateInput | undefined;
}
