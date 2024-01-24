/*
  Warnings:

  - You are about to drop the column `price` on the `History` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "History" DROP COLUMN "price",
ADD COLUMN     "productPrice" TEXT;
