import * as TypeGraphQL from "type-graphql";
import { Product } from "../../../models/Product";
import { SoldItem } from "../../../models/SoldItem";
import { ProductSoldItemsArgs } from "./args/ProductSoldItemsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class ProductRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [SoldItem], {
    nullable: false
  })
  async soldItems(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductSoldItemsArgs): Promise<SoldItem[]> {
    return getPrismaFromContext(ctx).product.findUnique({
      where: {
        id: product.id,
      },
    }).soldItems(args);
  }
}
