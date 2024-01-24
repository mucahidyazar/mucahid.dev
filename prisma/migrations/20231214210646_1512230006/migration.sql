-- CreateTable
CREATE TABLE "MhrsAccount" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MhrsAccount_email_key" ON "MhrsAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MhrsAccount_userId_key" ON "MhrsAccount"("userId");

-- AddForeignKey
ALTER TABLE "MhrsAccount" ADD CONSTRAINT "MhrsAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
