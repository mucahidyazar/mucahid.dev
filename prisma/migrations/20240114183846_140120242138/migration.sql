/*
  Warnings:

  - You are about to drop the `Wishlist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_wishListId_fkey";

-- DropTable
DROP TABLE "Wishlist";

-- CreateTable
CREATE TABLE "WishList" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "productName" TEXT,
    "productImage" TEXT,
    "productPrice" TEXT,
    "checkFrequency" "WishListCheckFrequency" NOT NULL DEFAULT 'daily',
    "inStock" BOOLEAN NOT NULL DEFAULT false,
    "minPrice" DOUBLE PRECISION,
    "maxPrice" DOUBLE PRECISION,
    "status" "WishListStatus" NOT NULL DEFAULT 'active',

    CONSTRAINT "WishList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_wishListId_fkey" FOREIGN KEY ("wishListId") REFERENCES "WishList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishList" ADD CONSTRAINT "WishList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
