/*
  Warnings:

  - The `checkFrequency` column on the `WishList` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `WishList` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "CheckStatus" AS ENUM ('active', 'inactive', 'archived');

-- CreateEnum
CREATE TYPE "CheckFrequency" AS ENUM ('fiveMinutes', 'daily', 'hourly', 'weekly');

-- AlterTable
ALTER TABLE "WishList" DROP COLUMN "checkFrequency",
ADD COLUMN     "checkFrequency" "CheckFrequency" NOT NULL DEFAULT 'daily',
DROP COLUMN "status",
ADD COLUMN     "status" "CheckStatus" NOT NULL DEFAULT 'active';

-- DropEnum
DROP TYPE "WishListCheckFrequency";

-- DropEnum
DROP TYPE "WishListStatus";

-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "checkFrequency" "CheckFrequency" NOT NULL DEFAULT 'daily',
    "status" "CheckStatus" NOT NULL DEFAULT 'active',

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
