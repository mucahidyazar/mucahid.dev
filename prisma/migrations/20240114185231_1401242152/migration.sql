/*
  Warnings:

  - Made the column `productUrl` on table `History` required. This step will fail if there are existing NULL values in that column.
  - Made the column `productUrl` on table `WishList` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "History" ALTER COLUMN "productUrl" SET NOT NULL;

-- AlterTable
ALTER TABLE "WishList" ALTER COLUMN "productUrl" SET NOT NULL;
