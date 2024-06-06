/*
  Warnings:

  - The primary key for the `professores` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "professores" DROP CONSTRAINT "professores_pkey",
ADD CONSTRAINT "professores_pkey" PRIMARY KEY ("codigo");
