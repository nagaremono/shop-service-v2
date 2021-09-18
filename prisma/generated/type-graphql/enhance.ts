import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Product: crudResolvers.ProductCrudResolver,
  SoldItem: crudResolvers.SoldItemCrudResolver,
  Transaction: crudResolvers.TransactionCrudResolver,
  User: crudResolvers.UserCrudResolver
};
const relationResolversMap = {
  Product: relationResolvers.ProductRelationsResolver,
  SoldItem: relationResolvers.SoldItemRelationsResolver,
  Transaction: relationResolvers.TransactionRelationsResolver,
  User: relationResolvers.UserRelationsResolver
};
const actionResolversMap = {
  Product: {
    product: actionResolvers.FindUniqueProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    products: actionResolvers.FindManyProductResolver,
    createProduct: actionResolvers.CreateProductResolver,
    createManyProduct: actionResolvers.CreateManyProductResolver,
    deleteProduct: actionResolvers.DeleteProductResolver,
    updateProduct: actionResolvers.UpdateProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    upsertProduct: actionResolvers.UpsertProductResolver,
    aggregateProduct: actionResolvers.AggregateProductResolver,
    groupByProduct: actionResolvers.GroupByProductResolver
  },
  SoldItem: {
    soldItem: actionResolvers.FindUniqueSoldItemResolver,
    findFirstSoldItem: actionResolvers.FindFirstSoldItemResolver,
    soldItems: actionResolvers.FindManySoldItemResolver,
    createSoldItem: actionResolvers.CreateSoldItemResolver,
    createManySoldItem: actionResolvers.CreateManySoldItemResolver,
    deleteSoldItem: actionResolvers.DeleteSoldItemResolver,
    updateSoldItem: actionResolvers.UpdateSoldItemResolver,
    deleteManySoldItem: actionResolvers.DeleteManySoldItemResolver,
    updateManySoldItem: actionResolvers.UpdateManySoldItemResolver,
    upsertSoldItem: actionResolvers.UpsertSoldItemResolver,
    aggregateSoldItem: actionResolvers.AggregateSoldItemResolver,
    groupBySoldItem: actionResolvers.GroupBySoldItemResolver
  },
  Transaction: {
    transaction: actionResolvers.FindUniqueTransactionResolver,
    findFirstTransaction: actionResolvers.FindFirstTransactionResolver,
    transactions: actionResolvers.FindManyTransactionResolver,
    createTransaction: actionResolvers.CreateTransactionResolver,
    createManyTransaction: actionResolvers.CreateManyTransactionResolver,
    deleteTransaction: actionResolvers.DeleteTransactionResolver,
    updateTransaction: actionResolvers.UpdateTransactionResolver,
    deleteManyTransaction: actionResolvers.DeleteManyTransactionResolver,
    updateManyTransaction: actionResolvers.UpdateManyTransactionResolver,
    upsertTransaction: actionResolvers.UpsertTransactionResolver,
    aggregateTransaction: actionResolvers.AggregateTransactionResolver,
    groupByTransaction: actionResolvers.GroupByTransactionResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  }
};
const resolversInfo = {
  Product: ["product", "findFirstProduct", "products", "createProduct", "createManyProduct", "deleteProduct", "updateProduct", "deleteManyProduct", "updateManyProduct", "upsertProduct", "aggregateProduct", "groupByProduct"],
  SoldItem: ["soldItem", "findFirstSoldItem", "soldItems", "createSoldItem", "createManySoldItem", "deleteSoldItem", "updateSoldItem", "deleteManySoldItem", "updateManySoldItem", "upsertSoldItem", "aggregateSoldItem", "groupBySoldItem"],
  Transaction: ["transaction", "findFirstTransaction", "transactions", "createTransaction", "createManyTransaction", "deleteTransaction", "updateTransaction", "deleteManyTransaction", "updateManyTransaction", "upsertTransaction", "aggregateTransaction", "groupByTransaction"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"]
};
const relationResolversInfo = {
  Product: ["soldItems"],
  SoldItem: ["product", "transaction"],
  Transaction: ["customer", "soldItems"],
  User: ["purchases"]
};
const modelsInfo = {
  Product: ["id", "createdAt", "updatedAt", "stock", "price", "name", "images"],
  SoldItem: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "images", "productId", "transactionId"],
  Transaction: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customerid"],
  User: ["id", "createdAt", "updatedAt", "username", "email", "password"]
};
const inputsInfo = {
  ProductWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "stock", "price", "name", "images", "soldItems"],
  ProductOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "stock", "price", "name", "images", "soldItems"],
  ProductWhereUniqueInput: ["id"],
  ProductOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "stock", "price", "name", "images", "_count", "_avg", "_max", "_min", "_sum"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "stock", "price", "name", "images"],
  SoldItemWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "quantity", "price", "name", "images", "product", "productId", "transaction", "transactionId"],
  SoldItemOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "images", "product", "productId", "transaction", "transactionId"],
  SoldItemWhereUniqueInput: ["id"],
  SoldItemOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "images", "productId", "transactionId", "_count", "_avg", "_max", "_min", "_sum"],
  SoldItemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "quantity", "price", "name", "images", "productId", "transactionId"],
  TransactionWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customer", "customerid", "soldItems"],
  TransactionOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customer", "customerid", "soldItems"],
  TransactionWhereUniqueInput: ["id"],
  TransactionOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customerid", "_count", "_avg", "_max", "_min", "_sum"],
  TransactionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customerid"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "username", "email", "password", "purchases"],
  UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "username", "email", "password", "purchases"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "username", "email", "password", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "username", "email", "password"],
  ProductCreateInput: ["id", "createdAt", "updatedAt", "stock", "price", "name", "images", "soldItems"],
  ProductUpdateInput: ["id", "createdAt", "updatedAt", "stock", "price", "name", "images", "soldItems"],
  ProductCreateManyInput: ["id", "createdAt", "updatedAt", "stock", "price", "name", "images"],
  ProductUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "stock", "price", "name", "images"],
  SoldItemCreateInput: ["createdAt", "updatedAt", "quantity", "price", "name", "images", "product", "transaction"],
  SoldItemUpdateInput: ["createdAt", "updatedAt", "quantity", "price", "name", "images", "product", "transaction"],
  SoldItemCreateManyInput: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "images", "productId", "transactionId"],
  SoldItemUpdateManyMutationInput: ["createdAt", "updatedAt", "quantity", "price", "name", "images"],
  TransactionCreateInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customer", "soldItems"],
  TransactionUpdateInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customer", "soldItems"],
  TransactionCreateManyInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customerid"],
  TransactionUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus"],
  UserCreateInput: ["createdAt", "updatedAt", "username", "email", "password", "purchases"],
  UserUpdateInput: ["createdAt", "updatedAt", "username", "email", "password", "purchases"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "username", "email", "password"],
  UserUpdateManyMutationInput: ["createdAt", "updatedAt", "username", "email", "password"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  JsonFilter: ["equals", "not"],
  SoldItemListRelationFilter: ["every", "some", "none"],
  SoldItemOrderByRelationAggregateInput: ["_count"],
  ProductCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "stock", "price", "name", "images"],
  ProductAvgOrderByAggregateInput: ["stock", "price"],
  ProductMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "stock", "price", "name"],
  ProductMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "stock", "price", "name"],
  ProductSumOrderByAggregateInput: ["stock", "price"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  JsonWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  ProductRelationFilter: ["is", "isNot"],
  TransactionRelationFilter: ["is", "isNot"],
  SoldItemCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "images", "productId", "transactionId"],
  SoldItemAvgOrderByAggregateInput: ["id", "quantity", "price"],
  SoldItemMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "productId", "transactionId"],
  SoldItemMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "productId", "transactionId"],
  SoldItemSumOrderByAggregateInput: ["id", "quantity", "price"],
  UserRelationFilter: ["is", "isNot"],
  TransactionCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customerid"],
  TransactionAvgOrderByAggregateInput: ["totalAmount", "customerid"],
  TransactionMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customerid"],
  TransactionMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customerid"],
  TransactionSumOrderByAggregateInput: ["totalAmount", "customerid"],
  TransactionListRelationFilter: ["every", "some", "none"],
  TransactionOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "username", "email", "password"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "username", "email", "password"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "username", "email", "password"],
  UserSumOrderByAggregateInput: ["id"],
  SoldItemCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  SoldItemUpdateManyWithoutProductInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProductCreateNestedOneWithoutSoldItemsInput: ["create", "connectOrCreate", "connect"],
  TransactionCreateNestedOneWithoutSoldItemsInput: ["create", "connectOrCreate", "connect"],
  ProductUpdateOneRequiredWithoutSoldItemsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TransactionUpdateOneRequiredWithoutSoldItemsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutPurchasesInput: ["create", "connectOrCreate", "connect"],
  SoldItemCreateNestedManyWithoutTransactionInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutPurchasesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SoldItemUpdateManyWithoutTransactionInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  TransactionCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
  TransactionUpdateManyWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedJsonFilter: ["equals", "not"],
  SoldItemCreateWithoutProductInput: ["createdAt", "updatedAt", "quantity", "price", "name", "images", "transaction"],
  SoldItemCreateOrConnectWithoutProductInput: ["where", "create"],
  SoldItemCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
  SoldItemUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  SoldItemUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  SoldItemUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  SoldItemScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "quantity", "price", "name", "images", "productId", "transactionId"],
  ProductCreateWithoutSoldItemsInput: ["id", "createdAt", "updatedAt", "stock", "price", "name", "images"],
  ProductCreateOrConnectWithoutSoldItemsInput: ["where", "create"],
  TransactionCreateWithoutSoldItemsInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customer"],
  TransactionCreateOrConnectWithoutSoldItemsInput: ["where", "create"],
  ProductUpsertWithoutSoldItemsInput: ["update", "create"],
  ProductUpdateWithoutSoldItemsInput: ["id", "createdAt", "updatedAt", "stock", "price", "name", "images"],
  TransactionUpsertWithoutSoldItemsInput: ["update", "create"],
  TransactionUpdateWithoutSoldItemsInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customer"],
  UserCreateWithoutPurchasesInput: ["createdAt", "updatedAt", "username", "email", "password"],
  UserCreateOrConnectWithoutPurchasesInput: ["where", "create"],
  SoldItemCreateWithoutTransactionInput: ["createdAt", "updatedAt", "quantity", "price", "name", "images", "product"],
  SoldItemCreateOrConnectWithoutTransactionInput: ["where", "create"],
  SoldItemCreateManyTransactionInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutPurchasesInput: ["update", "create"],
  UserUpdateWithoutPurchasesInput: ["createdAt", "updatedAt", "username", "email", "password"],
  SoldItemUpsertWithWhereUniqueWithoutTransactionInput: ["where", "update", "create"],
  SoldItemUpdateWithWhereUniqueWithoutTransactionInput: ["where", "data"],
  SoldItemUpdateManyWithWhereWithoutTransactionInput: ["where", "data"],
  TransactionCreateWithoutCustomerInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "soldItems"],
  TransactionCreateOrConnectWithoutCustomerInput: ["where", "create"],
  TransactionCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
  TransactionUpsertWithWhereUniqueWithoutCustomerInput: ["where", "update", "create"],
  TransactionUpdateWithWhereUniqueWithoutCustomerInput: ["where", "data"],
  TransactionUpdateManyWithWhereWithoutCustomerInput: ["where", "data"],
  TransactionScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customerid"],
  SoldItemCreateManyProductInput: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "images", "transactionId"],
  SoldItemUpdateWithoutProductInput: ["createdAt", "updatedAt", "quantity", "price", "name", "images", "transaction"],
  SoldItemCreateManyTransactionInput: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "images", "productId"],
  SoldItemUpdateWithoutTransactionInput: ["createdAt", "updatedAt", "quantity", "price", "name", "images", "product"],
  TransactionCreateManyCustomerInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus"],
  TransactionUpdateWithoutCustomerInput: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "soldItems"]
};
const outputsInfo = {
  AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
  ProductGroupBy: ["id", "createdAt", "updatedAt", "stock", "price", "name", "images", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSoldItem: ["_count", "_avg", "_sum", "_min", "_max"],
  SoldItemGroupBy: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "images", "productId", "transactionId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTransaction: ["_count", "_avg", "_sum", "_min", "_max"],
  TransactionGroupBy: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customerid", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "username", "email", "password", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  ProductCount: ["soldItems"],
  ProductCountAggregate: ["id", "createdAt", "updatedAt", "stock", "price", "name", "images", "_all"],
  ProductAvgAggregate: ["stock", "price"],
  ProductSumAggregate: ["stock", "price"],
  ProductMinAggregate: ["id", "createdAt", "updatedAt", "stock", "price", "name"],
  ProductMaxAggregate: ["id", "createdAt", "updatedAt", "stock", "price", "name"],
  SoldItemCountAggregate: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "images", "productId", "transactionId", "_all"],
  SoldItemAvgAggregate: ["id", "quantity", "price"],
  SoldItemSumAggregate: ["id", "quantity", "price"],
  SoldItemMinAggregate: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "productId", "transactionId"],
  SoldItemMaxAggregate: ["id", "createdAt", "updatedAt", "quantity", "price", "name", "productId", "transactionId"],
  TransactionCount: ["soldItems"],
  TransactionCountAggregate: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customerid", "_all"],
  TransactionAvgAggregate: ["totalAmount", "customerid"],
  TransactionSumAggregate: ["totalAmount", "customerid"],
  TransactionMinAggregate: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customerid"],
  TransactionMaxAggregate: ["id", "createdAt", "updatedAt", "totalAmount", "paymentStatus", "customerid"],
  UserCount: ["purchases"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "username", "email", "password", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "username", "email", "password"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "username", "email", "password"]
};
const argsInfo = {
  FindUniqueProductArgs: ["where"],
  FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProductArgs: ["data"],
  CreateManyProductArgs: ["data", "skipDuplicates"],
  DeleteProductArgs: ["where"],
  UpdateProductArgs: ["data", "where"],
  DeleteManyProductArgs: ["where"],
  UpdateManyProductArgs: ["data", "where"],
  UpsertProductArgs: ["where", "create", "update"],
  AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSoldItemArgs: ["where"],
  FindFirstSoldItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySoldItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSoldItemArgs: ["data"],
  CreateManySoldItemArgs: ["data", "skipDuplicates"],
  DeleteSoldItemArgs: ["where"],
  UpdateSoldItemArgs: ["data", "where"],
  DeleteManySoldItemArgs: ["where"],
  UpdateManySoldItemArgs: ["data", "where"],
  UpsertSoldItemArgs: ["where", "create", "update"],
  AggregateSoldItemArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySoldItemArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTransactionArgs: ["where"],
  FindFirstTransactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTransactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTransactionArgs: ["data"],
  CreateManyTransactionArgs: ["data", "skipDuplicates"],
  DeleteTransactionArgs: ["where"],
  UpdateTransactionArgs: ["data", "where"],
  DeleteManyTransactionArgs: ["where"],
  UpdateManyTransactionArgs: ["data", "where"],
  UpsertTransactionArgs: ["where", "create", "update"],
  AggregateTransactionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTransactionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







