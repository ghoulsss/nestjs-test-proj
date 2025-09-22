/*
  Warnings:

  - You are about to drop the `Breed` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Owner` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RolesOnOwners` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Cat" DROP CONSTRAINT "Cat_breed_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."RolesOnOwners" DROP CONSTRAINT "RolesOnOwners_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."RolesOnOwners" DROP CONSTRAINT "RolesOnOwners_roles_id_fkey";

-- DropTable
DROP TABLE "public"."Breed";

-- DropTable
DROP TABLE "public"."Cat";

-- DropTable
DROP TABLE "public"."Owner";

-- DropTable
DROP TABLE "public"."Roles";

-- DropTable
DROP TABLE "public"."RolesOnOwners";

-- CreateTable
CREATE TABLE "public"."roles" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."owners" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,

    CONSTRAINT "owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."rolesonowners" (
    "owner_id" INTEGER NOT NULL,
    "roles_id" INTEGER NOT NULL,

    CONSTRAINT "rolesonowners_pkey" PRIMARY KEY ("roles_id","owner_id")
);

-- CreateTable
CREATE TABLE "public"."cats" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "breed_id" INTEGER NOT NULL,
    "owner_id" INTEGER NOT NULL,

    CONSTRAINT "cats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."breeds" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "breeds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."catpassports" (
    "id" SERIAL NOT NULL,
    "passportNumber" TEXT NOT NULL,
    "catId" INTEGER NOT NULL,

    CONSTRAINT "catpassports_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_value_key" ON "public"."roles"("value");

-- CreateIndex
CREATE UNIQUE INDEX "owners_email_key" ON "public"."owners"("email");

-- CreateIndex
CREATE UNIQUE INDEX "breeds_id_key" ON "public"."breeds"("id");

-- CreateIndex
CREATE UNIQUE INDEX "catpassports_id_key" ON "public"."catpassports"("id");

-- CreateIndex
CREATE UNIQUE INDEX "catpassports_passportNumber_key" ON "public"."catpassports"("passportNumber");

-- CreateIndex
CREATE UNIQUE INDEX "catpassports_catId_key" ON "public"."catpassports"("catId");

-- AddForeignKey
ALTER TABLE "public"."rolesonowners" ADD CONSTRAINT "rolesonowners_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "public"."owners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."rolesonowners" ADD CONSTRAINT "rolesonowners_roles_id_fkey" FOREIGN KEY ("roles_id") REFERENCES "public"."roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cats" ADD CONSTRAINT "cats_breed_id_fkey" FOREIGN KEY ("breed_id") REFERENCES "public"."breeds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cats" ADD CONSTRAINT "cats_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "public"."owners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."catpassports" ADD CONSTRAINT "catpassports_catId_fkey" FOREIGN KEY ("catId") REFERENCES "public"."cats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
