import * as TypeGraphQL from "type-graphql";
import { SoldItem } from "../../../models/SoldItem";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { TransactionSoldItemsArgs } from "./args/TransactionSoldItemsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Transaction)
export class TransactionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async customer(@TypeGraphQL.Root() transaction: Transaction, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).transaction.findUnique({
      where: {
        id: transaction.id,
      },
    }).customer({});
  }

  @TypeGraphQL.FieldResolver(_type => [SoldItem], {
    nullable: false
  })
  async soldItems(@TypeGraphQL.Root() transaction: Transaction, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TransactionSoldItemsArgs): Promise<SoldItem[]> {
    return getPrismaFromContext(ctx).transaction.findUnique({
      where: {
        id: transaction.id,
      },
    }).soldItems(args);
  }
}
