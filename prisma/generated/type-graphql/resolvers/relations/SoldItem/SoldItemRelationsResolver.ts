import * as TypeGraphQL from "type-graphql";
import { Product } from "../../../models/Product";
import { SoldItem } from "../../../models/SoldItem";
import { Transaction } from "../../../models/Transaction";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SoldItem)
export class SoldItemRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false
  })
  async product(@TypeGraphQL.Root() soldItem: SoldItem, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return getPrismaFromContext(ctx).soldItem.findUnique({
      where: {
        id: soldItem.id,
      },
    }).product({});
  }

  @TypeGraphQL.FieldResolver(_type => Transaction, {
    nullable: false
  })
  async transaction(@TypeGraphQL.Root() soldItem: SoldItem, @TypeGraphQL.Ctx() ctx: any): Promise<Transaction> {
    return getPrismaFromContext(ctx).soldItem.findUnique({
      where: {
        id: soldItem.id,
      },
    }).transaction({});
  }
}
