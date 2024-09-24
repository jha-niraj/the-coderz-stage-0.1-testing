/*
  Warnings:

  - You are about to drop the column `fullname` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "fullname",
ADD COLUMN     "aboutme" TEXT,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "interests" TEXT[],
ADD COLUMN     "leetcode" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "skills" TEXT[],
ADD COLUMN     "twitter" TEXT,
ADD COLUMN     "website" TEXT,
ALTER COLUMN "emailVerified" DROP NOT NULL;
