import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { SoldItemUpdateManyWithoutTransactionInput } from "../inputs/SoldItemUpdateManyWithoutTransactionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPurchasesInput } from "../inputs/UserUpdateOneRequiredWithoutPurchasesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  totalAmount?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  paymentStatus?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPurchasesInput, {
    nullable: true
  })
  customer?: UserUpdateOneRequiredWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => SoldItemUpdateManyWithoutTransactionInput, {
    nullable: true
  })
  soldItems?: SoldItemUpdateManyWithoutTransactionInput | undefined;
}
