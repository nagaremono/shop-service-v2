import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TransactionAvgAggregate {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmount!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  customerid!: number | null;
}
