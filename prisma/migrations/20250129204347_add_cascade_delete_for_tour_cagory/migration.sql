-- DropForeignKey
ALTER TABLE "TourCategory" DROP CONSTRAINT "TourCategory_tourId_fkey";

-- AddForeignKey
ALTER TABLE "TourCategory" ADD CONSTRAINT "TourCategory_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;
