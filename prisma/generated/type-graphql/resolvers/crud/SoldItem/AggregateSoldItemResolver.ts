import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSoldItemArgs } from "./args/AggregateSoldItemArgs";
import { SoldItem } from "../../../models/SoldItem";
import { AggregateSoldItem } from "../../outputs/AggregateSoldItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SoldItem)
export class AggregateSoldItemResolver {
  @TypeGraphQL.Query(_returns => AggregateSoldItem, {
    nullable: false
  })
  async aggregateSoldItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSoldItemArgs): Promise<AggregateSoldItem> {
    return getPrismaFromContext(ctx).soldItem.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
