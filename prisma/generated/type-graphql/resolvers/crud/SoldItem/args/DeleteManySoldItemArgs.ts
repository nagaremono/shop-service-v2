import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SoldItemWhereInput } from "../../../inputs/SoldItemWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySoldItemArgs {
  @TypeGraphQL.Field(_type => SoldItemWhereInput, {
    nullable: true
  })
  where?: SoldItemWhereInput | undefined;
}
