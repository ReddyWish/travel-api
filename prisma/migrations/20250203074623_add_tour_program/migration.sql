-- CreateTable
CREATE TABLE "TourProgram" (
    "id" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TourProgram_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TourProgram" ADD CONSTRAINT "TourProgram_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;
