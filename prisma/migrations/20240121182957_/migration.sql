/*
  Warnings:

  - You are about to drop the `Appointment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cookie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feedback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `History` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MhrsAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WishList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_mhrsAccountId_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Cookie" DROP CONSTRAINT "Cookie_appoinmentId_fkey";

-- DropForeignKey
ALTER TABLE "Cookie" DROP CONSTRAINT "Cookie_userId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_createdById_fkey";

-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_userId_fkey";

-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_wishListId_fkey";

-- DropForeignKey
ALTER TABLE "MhrsAccount" DROP CONSTRAINT "MhrsAccount_userId_fkey";

-- DropForeignKey
ALTER TABLE "WishList" DROP CONSTRAINT "WishList_userId_fkey";

-- DropTable
DROP TABLE "Appointment";

-- DropTable
DROP TABLE "Article";

-- DropTable
DROP TABLE "Cookie";

-- DropTable
DROP TABLE "Feedback";

-- DropTable
DROP TABLE "History";

-- DropTable
DROP TABLE "MhrsAccount";

-- DropTable
DROP TABLE "WishList";

-- CreateTable
CREATE TABLE "mhrs_accounts" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "feedbacks" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "message" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'in_progress',
    "createdById" TEXT NOT NULL,

    CONSTRAINT "feedbacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tags" TEXT[],
    "category" TEXT,
    "cover" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "histories" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "wishListId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "productPrice" TEXT,
    "productName" TEXT,
    "productImage" TEXT,
    "productUrl" TEXT NOT NULL,

    CONSTRAINT "histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wish_lists" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "productName" TEXT,
    "productImage" TEXT,
    "productPrice" TEXT,
    "productUrl" TEXT NOT NULL,
    "checkFrequency" "CheckFrequency" NOT NULL DEFAULT 'daily',
    "inStock" BOOLEAN NOT NULL DEFAULT false,
    "minPrice" DOUBLE PRECISION,
    "maxPrice" DOUBLE PRECISION,
    "status" "CheckStatus" NOT NULL DEFAULT 'active',

    CONSTRAINT "wish_lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cookies" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "appoinmentId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cookies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointments" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "reservedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "mhrsAccountId" TEXT NOT NULL,
    "checkFrequency" "CheckFrequency" NOT NULL DEFAULT 'daily',
    "status" "CheckStatus" NOT NULL DEFAULT 'active',
    "cityId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "polyclinicId" INTEGER NOT NULL,
    "doctorId" INTEGER,
    "localHospitals" BOOLEAN NOT NULL DEFAULT true,
    "firstExamination" BOOLEAN NOT NULL DEFAULT false,
    "sex" "Sex" NOT NULL DEFAULT 'B',
    "anyDoctor" BOOLEAN NOT NULL DEFAULT true,
    "anyTime" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mhrs_accounts_id_key" ON "mhrs_accounts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "mhrs_accounts_userId_key" ON "mhrs_accounts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "cookies_appoinmentId_key" ON "cookies"("appoinmentId");

-- AddForeignKey
ALTER TABLE "mhrs_accounts" ADD CONSTRAINT "mhrs_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "histories" ADD CONSTRAINT "histories_wishListId_fkey" FOREIGN KEY ("wishListId") REFERENCES "wish_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "histories" ADD CONSTRAINT "histories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wish_lists" ADD CONSTRAINT "wish_lists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cookies" ADD CONSTRAINT "cookies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cookies" ADD CONSTRAINT "cookies_appoinmentId_fkey" FOREIGN KEY ("appoinmentId") REFERENCES "appointments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_mhrsAccountId_fkey" FOREIGN KEY ("mhrsAccountId") REFERENCES "mhrs_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
