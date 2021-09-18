import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateManyCustomerInput } from "../inputs/TransactionCreateManyCustomerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [TransactionCreateManyCustomerInput], {
    nullable: false
  })
  data!: TransactionCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
