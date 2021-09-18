import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SoldItemCreateInput } from "../../../inputs/SoldItemCreateInput";
import { SoldItemUpdateInput } from "../../../inputs/SoldItemUpdateInput";
import { SoldItemWhereUniqueInput } from "../../../inputs/SoldItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSoldItemArgs {
  @TypeGraphQL.Field(_type => SoldItemWhereUniqueInput, {
    nullable: false
  })
  where!: SoldItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => SoldItemCreateInput, {
    nullable: false
  })
  create!: SoldItemCreateInput;

  @TypeGraphQL.Field(_type => SoldItemUpdateInput, {
    nullable: false
  })
  update!: SoldItemUpdateInput;
}
