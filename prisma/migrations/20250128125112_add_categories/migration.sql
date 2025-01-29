-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourCategory" (
    "id" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TourCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TourCategory_tourId_idx" ON "TourCategory"("tourId");

-- CreateIndex
CREATE INDEX "TourCategory_categoryId_idx" ON "TourCategory"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "TourCategory_tourId_categoryId_key" ON "TourCategory"("tourId", "categoryId");

-- AddForeignKey
ALTER TABLE "TourCategory" ADD CONSTRAINT "TourCategory_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourCategory" ADD CONSTRAINT "TourCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
