/*
  Warnings:

  - You are about to drop the `histories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "histories" DROP CONSTRAINT "histories_userId_fkey";

-- DropForeignKey
ALTER TABLE "histories" DROP CONSTRAINT "histories_wishListId_fkey";

-- DropTable
DROP TABLE "histories";

-- CreateTable
CREATE TABLE "stock_histories" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "wishListId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "productPrice" TEXT,
    "productName" TEXT,
    "productImage" TEXT,
    "productUrl" TEXT NOT NULL,

    CONSTRAINT "stock_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointment_histories" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "appoinmentId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointment_histories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "stock_histories" ADD CONSTRAINT "stock_histories_wishListId_fkey" FOREIGN KEY ("wishListId") REFERENCES "wish_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_histories" ADD CONSTRAINT "stock_histories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment_histories" ADD CONSTRAINT "appointment_histories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment_histories" ADD CONSTRAINT "appointment_histories_appoinmentId_fkey" FOREIGN KEY ("appoinmentId") REFERENCES "appointments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
