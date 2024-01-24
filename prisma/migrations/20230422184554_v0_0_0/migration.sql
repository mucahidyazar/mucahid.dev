-- CreateEnum
CREATE TYPE "Status" AS ENUM ('in_progress', 'active');

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'in_progress',

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
