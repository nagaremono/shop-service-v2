import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SoldItemScalarWhereInput } from "../inputs/SoldItemScalarWhereInput";
import { SoldItemUpdateManyMutationInput } from "../inputs/SoldItemUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => SoldItemScalarWhereInput, {
    nullable: false
  })
  where!: SoldItemScalarWhereInput;

  @TypeGraphQL.Field(_type => SoldItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: SoldItemUpdateManyMutationInput;
}
