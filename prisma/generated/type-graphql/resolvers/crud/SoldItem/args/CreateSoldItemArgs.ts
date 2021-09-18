import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SoldItemCreateInput } from "../../../inputs/SoldItemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSoldItemArgs {
  @TypeGraphQL.Field(_type => SoldItemCreateInput, {
    nullable: false
  })
  data!: SoldItemCreateInput;
}
