/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `cookies` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cookies_userId_key" ON "cookies"("userId");
