import * as TypeGraphQL from "type-graphql";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { UserPurchasesArgs } from "./args/UserPurchasesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Transaction], {
    nullable: false
  })
  async purchases(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPurchasesArgs): Promise<Transaction[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).purchases(args);
  }
}
