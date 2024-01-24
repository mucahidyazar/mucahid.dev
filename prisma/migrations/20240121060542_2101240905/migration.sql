/*
  Warnings:

  - Added the required column `reservedAt` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "anyDoctor" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "anyTime" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "doctorId" INTEGER,
ADD COLUMN     "reservedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Cookie" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "appoinmentId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cookie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cookie_appoinmentId_key" ON "Cookie"("appoinmentId");

-- AddForeignKey
ALTER TABLE "Cookie" ADD CONSTRAINT "Cookie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cookie" ADD CONSTRAINT "Cookie_appoinmentId_fkey" FOREIGN KEY ("appoinmentId") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
