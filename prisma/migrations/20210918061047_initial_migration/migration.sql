-- CreateTable
CREATE TABLE "Product" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "stock" INTEGER NOT NULL,
    "price" DECIMAL(17,2) NOT NULL,
    "name" VARCHAR(500) NOT NULL,
    "images" JSONB NOT NULL DEFAULT E'[]',

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoldItem" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(17,2) NOT NULL,
    "name" VARCHAR(500) NOT NULL,
    "images" JSONB NOT NULL DEFAULT E'[]',
    "productId" UUID NOT NULL,

    CONSTRAINT "SoldItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "totalAmount" DECIMAL(17,2) NOT NULL,
    "paymentStatus" VARCHAR(255) NOT NULL,
    "customerid" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "username" VARCHAR(500) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(500) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "SoldItem" ADD CONSTRAINT "SoldItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_customerid_fkey" FOREIGN KEY ("customerid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
