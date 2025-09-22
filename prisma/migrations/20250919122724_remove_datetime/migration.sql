/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `RolesOnOwners` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `RolesOnOwners` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."RolesOnOwners" DROP COLUMN "assignedAt",
DROP COLUMN "assignedBy";
