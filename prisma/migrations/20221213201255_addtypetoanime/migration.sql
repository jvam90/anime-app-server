/*
  Warnings:

  - Added the required column `type` to the `Anime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Anime" ADD COLUMN     "type" TEXT NOT NULL;
