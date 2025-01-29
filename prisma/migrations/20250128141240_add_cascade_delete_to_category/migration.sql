-- DropForeignKey
ALTER TABLE "TourCategory" DROP CONSTRAINT "TourCategory_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "TourCategory" ADD CONSTRAINT "TourCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
