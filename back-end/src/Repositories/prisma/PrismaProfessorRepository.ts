import { PrismaClient } from "@prisma/client"
import { Professor } from "../../Models/Professor"

const prisma = new PrismaClient()

class PrismaProfessorRepository {

    async getAll(): Promise<Professor[]> {

        const professores = await prisma.professor.findMany()
        return professores

    }

    async getByEmail(email: string | null): Promise<Professor | null> {

        const professor = await prisma.professor.findFirst({
            where: {
                email
            }
        })

        return professor

    }

    async create(data: Professor): Promise<Professor> {

        const newProfessor = await prisma.professor.create({data})

        console.log(newProfessor)
        return newProfessor

    }

    async update(codigo: string, data: Professor): Promise<Professor> {

        const updateProfessor = await prisma.professor.update({
            data,
            where: {
                codigo
            }
        })

        console.log(updateProfessor)
        return updateProfessor

    }

}

export default PrismaProfessorRepository