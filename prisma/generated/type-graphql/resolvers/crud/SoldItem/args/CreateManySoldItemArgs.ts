import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SoldItemCreateManyInput } from "../../../inputs/SoldItemCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySoldItemArgs {
  @TypeGraphQL.Field(_type => [SoldItemCreateManyInput], {
    nullable: false
  })
  data!: SoldItemCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
