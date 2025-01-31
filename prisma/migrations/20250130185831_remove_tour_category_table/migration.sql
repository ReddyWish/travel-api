/*
  Warnings:

  - You are about to drop the `TourCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TourCategory" DROP CONSTRAINT "TourCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "TourCategory" DROP CONSTRAINT "TourCategory_tourId_fkey";

-- DropTable
DROP TABLE "TourCategory";

-- CreateTable
CREATE TABLE "_CategoryToTour" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CategoryToTour_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CategoryToTour_B_index" ON "_CategoryToTour"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToTour" ADD CONSTRAINT "_CategoryToTour_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToTour" ADD CONSTRAINT "_CategoryToTour_B_fkey" FOREIGN KEY ("B") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;
