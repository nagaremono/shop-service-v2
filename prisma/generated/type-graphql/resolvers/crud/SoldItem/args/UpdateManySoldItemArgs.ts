import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SoldItemUpdateManyMutationInput } from "../../../inputs/SoldItemUpdateManyMutationInput";
import { SoldItemWhereInput } from "../../../inputs/SoldItemWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySoldItemArgs {
  @TypeGraphQL.Field(_type => SoldItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: SoldItemUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SoldItemWhereInput, {
    nullable: true
  })
  where?: SoldItemWhereInput | undefined;
}
