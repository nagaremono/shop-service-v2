import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateSoldItemArgs } from "./args/CreateSoldItemArgs";
import { SoldItem } from "../../../models/SoldItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SoldItem)
export class CreateSoldItemResolver {
  @TypeGraphQL.Mutation(_returns => SoldItem, {
    nullable: false
  })
  async createSoldItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateSoldItemArgs): Promise<SoldItem> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).soldItem.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
