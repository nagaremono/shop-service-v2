import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutSoldItemsInput } from "../inputs/ProductUpdateOneRequiredWithoutSoldItemsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateOneRequiredWithoutSoldItemsInput } from "../inputs/TransactionUpdateOneRequiredWithoutSoldItemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SoldItemUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  images?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutSoldItemsInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutSoldItemsInput | undefined;

  @TypeGraphQL.Field(_type => TransactionUpdateOneRequiredWithoutSoldItemsInput, {
    nullable: true
  })
  transaction?: TransactionUpdateOneRequiredWithoutSoldItemsInput | undefined;
}
