import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutSoldItemsInput } from "../inputs/ProductCreateWithoutSoldItemsInput";
import { ProductUpdateWithoutSoldItemsInput } from "../inputs/ProductUpdateWithoutSoldItemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpsertWithoutSoldItemsInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutSoldItemsInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutSoldItemsInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutSoldItemsInput, {
    nullable: false
  })
  create!: ProductCreateWithoutSoldItemsInput;
}
