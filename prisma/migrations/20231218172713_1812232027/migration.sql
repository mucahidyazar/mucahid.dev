/*
  Warnings:

  - You are about to drop the column `email` on the `MhrsAccount` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `MhrsAccount` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `MhrsAccount` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "MhrsAccount_email_key";

-- AlterTable
ALTER TABLE "MhrsAccount" DROP COLUMN "email",
ADD COLUMN     "id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MhrsAccount_id_key" ON "MhrsAccount"("id");
