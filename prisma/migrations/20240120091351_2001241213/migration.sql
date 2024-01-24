/*
  Warnings:

  - Changed the type of `cityId` on the `Appointment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `districtId` on the `Appointment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `polyclinicId` on the `Appointment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "cityId",
ADD COLUMN     "cityId" INTEGER NOT NULL,
DROP COLUMN "districtId",
ADD COLUMN     "districtId" INTEGER NOT NULL,
DROP COLUMN "polyclinicId",
ADD COLUMN     "polyclinicId" INTEGER NOT NULL;
