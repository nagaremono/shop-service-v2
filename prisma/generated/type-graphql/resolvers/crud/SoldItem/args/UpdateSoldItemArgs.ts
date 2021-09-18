import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SoldItemUpdateInput } from "../../../inputs/SoldItemUpdateInput";
import { SoldItemWhereUniqueInput } from "../../../inputs/SoldItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSoldItemArgs {
  @TypeGraphQL.Field(_type => SoldItemUpdateInput, {
    nullable: false
  })
  data!: SoldItemUpdateInput;

  @TypeGraphQL.Field(_type => SoldItemWhereUniqueInput, {
    nullable: false
  })
  where!: SoldItemWhereUniqueInput;
}
