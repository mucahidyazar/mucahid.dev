/*
  Warnings:

  - You are about to drop the column `expiresAt` on the `appointment_histories` table. All the data in the column will be lost.
  - You are about to drop the column `key` on the `appointment_histories` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `appointment_histories` table. All the data in the column will be lost.
  - Added the required column `message` to the `appointment_histories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "appointment_histories" DROP COLUMN "expiresAt",
DROP COLUMN "key",
DROP COLUMN "value",
ADD COLUMN     "message" TEXT NOT NULL;
