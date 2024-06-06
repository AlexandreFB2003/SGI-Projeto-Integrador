-- CreateTable
CREATE TABLE "professores" (
    "nome" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" BIGINT NOT NULL,
    "telefone" TEXT,
    "email" TEXT,
    "dt_nascimento" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "professores_pkey" PRIMARY KEY ("nome")
);
