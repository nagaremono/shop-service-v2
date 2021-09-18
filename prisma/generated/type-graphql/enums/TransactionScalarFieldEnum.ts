import * as TypeGraphQL from "type-graphql";

export enum TransactionScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  totalAmount = "totalAmount",
  paymentStatus = "paymentStatus",
  customerid = "customerid"
}
TypeGraphQL.registerEnumType(TransactionScalarFieldEnum, {
  name: "TransactionScalarFieldEnum",
  description: undefined,
});
