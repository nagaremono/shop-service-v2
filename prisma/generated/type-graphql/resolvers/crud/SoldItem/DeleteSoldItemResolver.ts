import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteSoldItemArgs } from "./args/DeleteSoldItemArgs";
import { SoldItem } from "../../../models/SoldItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SoldItem)
export class DeleteSoldItemResolver {
  @TypeGraphQL.Mutation(_returns => SoldItem, {
    nullable: true
  })
  async deleteSoldItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteSoldItemArgs): Promise<SoldItem | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).soldItem.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
