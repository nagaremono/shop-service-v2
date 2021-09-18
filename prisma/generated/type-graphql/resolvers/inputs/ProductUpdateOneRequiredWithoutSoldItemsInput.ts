import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutSoldItemsInput } from "../inputs/ProductCreateOrConnectWithoutSoldItemsInput";
import { ProductCreateWithoutSoldItemsInput } from "../inputs/ProductCreateWithoutSoldItemsInput";
import { ProductUpdateWithoutSoldItemsInput } from "../inputs/ProductUpdateWithoutSoldItemsInput";
import { ProductUpsertWithoutSoldItemsInput } from "../inputs/ProductUpsertWithoutSoldItemsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateOneRequiredWithoutSoldItemsInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutSoldItemsInput, {
    nullable: true
  })
  create?: ProductCreateWithoutSoldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutSoldItemsInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutSoldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutSoldItemsInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutSoldItemsInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutSoldItemsInput, {
    nullable: true
  })
  update?: ProductUpdateWithoutSoldItemsInput | undefined;
}
