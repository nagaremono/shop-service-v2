import * as TypeGraphQL from "type-graphql";

export enum ProductScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  stock = "stock",
  price = "price",
  name = "name",
  images = "images"
}
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
  name: "ProductScalarFieldEnum",
  description: undefined,
});
