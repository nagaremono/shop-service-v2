import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionAvgAggregate } from "../outputs/TransactionAvgAggregate";
import { TransactionCountAggregate } from "../outputs/TransactionCountAggregate";
import { TransactionMaxAggregate } from "../outputs/TransactionMaxAggregate";
import { TransactionMinAggregate } from "../outputs/TransactionMinAggregate";
import { TransactionSumAggregate } from "../outputs/TransactionSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TransactionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  totalAmount!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  paymentStatus!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customerid!: number;

  @TypeGraphQL.Field(_type => TransactionCountAggregate, {
    nullable: true
  })
  _count!: TransactionCountAggregate | null;

  @TypeGraphQL.Field(_type => TransactionAvgAggregate, {
    nullable: true
  })
  _avg!: TransactionAvgAggregate | null;

  @TypeGraphQL.Field(_type => TransactionSumAggregate, {
    nullable: true
  })
  _sum!: TransactionSumAggregate | null;

  @TypeGraphQL.Field(_type => TransactionMinAggregate, {
    nullable: true
  })
  _min!: TransactionMinAggregate | null;

  @TypeGraphQL.Field(_type => TransactionMaxAggregate, {
    nullable: true
  })
  _max!: TransactionMaxAggregate | null;
}
