/*
  Warnings:

  - Added the required column `cityId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `districtId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mhrsAccountId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `polyclinicId` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('E', 'K', 'B');

-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "cityId" TEXT NOT NULL,
ADD COLUMN     "districtId" TEXT NOT NULL,
ADD COLUMN     "firstExamination" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "localHospitals" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "mhrsAccountId" TEXT NOT NULL,
ADD COLUMN     "polyclinicId" TEXT NOT NULL,
ADD COLUMN     "sex" "Sex" NOT NULL DEFAULT 'B';

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_mhrsAccountId_fkey" FOREIGN KEY ("mhrsAccountId") REFERENCES "MhrsAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
