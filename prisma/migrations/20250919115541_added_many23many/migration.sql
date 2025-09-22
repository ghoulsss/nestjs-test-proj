-- CreateTable
CREATE TABLE "public"."Roles" (
    "id" SERIAL NOT NULL,
    "values" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Owner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RolesOnOwners" (
    "owner_id" INTEGER NOT NULL,
    "roles_id" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "RolesOnOwners_pkey" PRIMARY KEY ("roles_id","owner_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Roles_values_key" ON "public"."Roles"("values");

-- AddForeignKey
ALTER TABLE "public"."RolesOnOwners" ADD CONSTRAINT "RolesOnOwners_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "public"."Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RolesOnOwners" ADD CONSTRAINT "RolesOnOwners_roles_id_fkey" FOREIGN KEY ("roles_id") REFERENCES "public"."Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
