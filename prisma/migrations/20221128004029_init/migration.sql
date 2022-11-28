-- CreateTable
CREATE TABLE "Home" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "title" TEXT,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "beds" INTEGER NOT NULL,
    "guests" INTEGER NOT NULL,
    "baths" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Home_pkey" PRIMARY KEY ("id")
);
