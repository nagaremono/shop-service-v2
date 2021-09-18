import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { SoldItem } from "../models/SoldItem";
import { User } from "../models/User";
import { TransactionCount } from "../resolvers/outputs/TransactionCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Transaction {
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

  customer?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customerid!: number;

  soldItems?: SoldItem[];

  @TypeGraphQL.Field(_type => TransactionCount, {
    nullable: true
  })
  _count?: TransactionCount | null;
}
