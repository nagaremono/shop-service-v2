import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSoldItemArgs } from "./args/FindUniqueSoldItemArgs";
import { SoldItem } from "../../../models/SoldItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SoldItem)
export class FindUniqueSoldItemResolver {
  @TypeGraphQL.Query(_returns => SoldItem, {
    nullable: true
  })
  async soldItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSoldItemArgs): Promise<SoldItem | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).soldItem.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
