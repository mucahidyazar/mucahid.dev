/*
  Warnings:

  - You are about to drop the column `history` on the `Wishlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Wishlist" DROP COLUMN "history";

-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "wishListId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "inStock" BOOLEAN NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_wishListId_fkey" FOREIGN KEY ("wishListId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
