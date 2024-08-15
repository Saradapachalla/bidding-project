-- CreateTable
CREATE TABLE "jobs" (
    "id" TEXT NOT NULL,
    "requirement" VARCHAR(250) NOT NULL,
    "description" VARCHAR(250) NOT NULL,
    "poster_name" TEXT NOT NULL,
    "poster_contact" TEXT NOT NULL,
    "lowest_bid" DOUBLE PRECISION DEFAULT 0.0,
    "bids_count" INTEGER DEFAULT 0,
    "expiration_date" DATE,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);
