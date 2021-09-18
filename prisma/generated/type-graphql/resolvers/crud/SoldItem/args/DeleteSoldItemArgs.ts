import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SoldItemWhereUniqueInput } from "../../../inputs/SoldItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSoldItemArgs {
  @TypeGraphQL.Field(_type => SoldItemWhereUniqueInput, {
    nullable: false
  })
  where!: SoldItemWhereUniqueInput;
}
