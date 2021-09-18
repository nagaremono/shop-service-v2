import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemCreateManyTransactionInput } from "../inputs/SoldItemCreateManyTransactionInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemCreateManyTransactionInputEnvelope {
  @TypeGraphQL.Field(_type => [SoldItemCreateManyTransactionInput], {
    nullable: false
  })
  data!: SoldItemCreateManyTransactionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
