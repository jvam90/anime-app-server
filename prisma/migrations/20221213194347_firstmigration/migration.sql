-- CreateTable
CREATE TABLE "Anime" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "progress" TEXT NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);
