import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPurchasesInput } from "../inputs/UserCreateOrConnectWithoutPurchasesInput";
import { UserCreateWithoutPurchasesInput } from "../inputs/UserCreateWithoutPurchasesInput";
import { UserUpdateWithoutPurchasesInput } from "../inputs/UserUpdateWithoutPurchasesInput";
import { UserUpsertWithoutPurchasesInput } from "../inputs/UserUpsertWithoutPurchasesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPurchasesInput, {
    nullable: true
  })
  create?: UserCreateWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPurchasesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPurchasesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPurchasesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPurchasesInput | undefined;
}
