/*
  Warnings:

  - You are about to drop the `TourProgram` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TourProgram" DROP CONSTRAINT "TourProgram_tourId_fkey";

-- DropTable
DROP TABLE "TourProgram";

-- CreateTable
CREATE TABLE "TourProgramFragment" (
    "id" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TourProgramFragment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TourProgramFragment" ADD CONSTRAINT "TourProgramFragment_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;
