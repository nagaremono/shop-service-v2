import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionAvgOrderByAggregateInput } from "../inputs/TransactionAvgOrderByAggregateInput";
import { TransactionCountOrderByAggregateInput } from "../inputs/TransactionCountOrderByAggregateInput";
import { TransactionMaxOrderByAggregateInput } from "../inputs/TransactionMaxOrderByAggregateInput";
import { TransactionMinOrderByAggregateInput } from "../inputs/TransactionMinOrderByAggregateInput";
import { TransactionSumOrderByAggregateInput } from "../inputs/TransactionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionOrderByWithAggregationInput {
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
  totalAmount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  paymentStatus?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customerid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TransactionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TransactionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransactionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TransactionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransactionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TransactionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransactionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TransactionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransactionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TransactionSumOrderByAggregateInput | undefined;
}
