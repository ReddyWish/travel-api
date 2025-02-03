/*
  Warnings:

  - You are about to drop the column `dayNumber` on the `TourProgramFragment` table. All the data in the column will be lost.
  - Added the required column `order` to the `TourProgramFragment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TourProgramFragment" DROP COLUMN "dayNumber",
ADD COLUMN     "order" INTEGER NOT NULL;
