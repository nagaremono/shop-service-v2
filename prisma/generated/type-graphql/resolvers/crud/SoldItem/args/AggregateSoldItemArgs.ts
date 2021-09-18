import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SoldItemOrderByWithRelationInput } from "../../../inputs/SoldItemOrderByWithRelationInput";
import { SoldItemWhereInput } from "../../../inputs/SoldItemWhereInput";
import { SoldItemWhereUniqueInput } from "../../../inputs/SoldItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSoldItemArgs {
  @TypeGraphQL.Field(_type => SoldItemWhereInput, {
    nullable: true
  })
  where?: SoldItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SoldItemOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SoldItemOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SoldItemWhereUniqueInput, {
    nullable: true
  })
  cursor?: SoldItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
