import * as TypeGraphQL from "type-graphql";

export enum SoldItemScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  quantity = "quantity",
  price = "price",
  name = "name",
  images = "images",
  productId = "productId",
  transactionId = "transactionId"
}
TypeGraphQL.registerEnumType(SoldItemScalarFieldEnum, {
  name: "SoldItemScalarFieldEnum",
  description: undefined,
});
