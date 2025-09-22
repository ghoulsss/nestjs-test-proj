/*
  Warnings:

  - You are about to drop the column `catId` on the `catpassports` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cat_id]` on the table `catpassports` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cat_id` to the `catpassports` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."catpassports" DROP CONSTRAINT "catpassports_catId_fkey";

-- DropIndex
DROP INDEX "public"."catpassports_catId_key";

-- AlterTable
ALTER TABLE "public"."catpassports" DROP COLUMN "catId",
ADD COLUMN     "cat_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "catpassports_cat_id_key" ON "public"."catpassports"("cat_id");

-- AddForeignKey
ALTER TABLE "public"."catpassports" ADD CONSTRAINT "catpassports_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "public"."cats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
