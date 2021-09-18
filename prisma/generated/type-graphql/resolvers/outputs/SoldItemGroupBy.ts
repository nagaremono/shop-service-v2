import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemAvgAggregate } from "../outputs/SoldItemAvgAggregate";
import { SoldItemCountAggregate } from "../outputs/SoldItemCountAggregate";
import { SoldItemMaxAggregate } from "../outputs/SoldItemMaxAggregate";
import { SoldItemMinAggregate } from "../outputs/SoldItemMinAggregate";
import { SoldItemSumAggregate } from "../outputs/SoldItemSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class SoldItemGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  price!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  images!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  transactionId!: string;

  @TypeGraphQL.Field(_type => SoldItemCountAggregate, {
    nullable: true
  })
  _count!: SoldItemCountAggregate | null;

  @TypeGraphQL.Field(_type => SoldItemAvgAggregate, {
    nullable: true
  })
  _avg!: SoldItemAvgAggregate | null;

  @TypeGraphQL.Field(_type => SoldItemSumAggregate, {
    nullable: true
  })
  _sum!: SoldItemSumAggregate | null;

  @TypeGraphQL.Field(_type => SoldItemMinAggregate, {
    nullable: true
  })
  _min!: SoldItemMinAggregate | null;

  @TypeGraphQL.Field(_type => SoldItemMaxAggregate, {
    nullable: true
  })
  _max!: SoldItemMaxAggregate | null;
}
