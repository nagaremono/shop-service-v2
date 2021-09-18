/*
  Warnings:

  - Added the required column `transactionId` to the `SoldItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SoldItem" ADD COLUMN     "transactionId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "SoldItem" ADD CONSTRAINT "SoldItem_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
