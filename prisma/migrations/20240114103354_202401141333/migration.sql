-- CreateEnum
CREATE TYPE "WishListStatus" AS ENUM ('active', 'inactive', 'archived');

-- CreateEnum
CREATE TYPE "WishListCheckFrequency" AS ENUM ('fiveMinutes', 'daily', 'hourly', 'weekly');

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "checkFrequency" "WishListCheckFrequency" NOT NULL DEFAULT 'daily',
    "inStock" BOOLEAN NOT NULL DEFAULT false,
    "minPrice" DOUBLE PRECISION,
    "maxPrice" DOUBLE PRECISION,
    "history" TEXT[],
    "status" "WishListStatus" NOT NULL DEFAULT 'active',

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);
