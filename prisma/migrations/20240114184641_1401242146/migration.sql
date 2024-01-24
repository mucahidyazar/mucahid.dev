/*
  Warnings:

  - You are about to drop the column `link` on the `WishList` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "History" ADD COLUMN     "productUrl" TEXT;

-- AlterTable
ALTER TABLE "WishList" DROP COLUMN "link",
ADD COLUMN     "productUrl" TEXT;
