import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemCreateManyProductInput } from "../inputs/SoldItemCreateManyProductInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [SoldItemCreateManyProductInput], {
    nullable: false
  })
  data!: SoldItemCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
