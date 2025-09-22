/*
  Warnings:

  - Added the required column `breed_id` to the `Cat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Cat" ADD COLUMN     "breed_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Cat" ADD CONSTRAINT "Cat_breed_id_fkey" FOREIGN KEY ("breed_id") REFERENCES "public"."Breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
