import { Request, Response } from "express";

import ProfessorService from "../Services/ProfessorService";
import InMemoryProfessorRepository from "../Repositories/In-Memory/InMemoryProfessorRepository";
import PrismaProfessorRepository from "../Repositories/prisma/PrismaProfessorRepository";

const professorService = new ProfessorService(new PrismaProfessorRepository())

class ProfessorController {

    constructor(){

    }

    async getAll(Req: Request, Res: Response) {

        try {

            const professorData = await professorService.getAll()
            Res.json(professorData)

        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }

    }

    async create(Req: Request, Res: Response) {

        try {

            const data = Req.body

            if (!data.nome || !data.codigo || !data.senha || !data.cpf) {
                throw new Error("Por favor, envie todos os dados obrigatórios")
            }

            delete data.submit

            const professorCreatedData = await professorService.create(data)

            Res.json(professorCreatedData)

        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }

        

    }

    async update(Req: Request, Res: Response) {

        try {

            const data = Req.body
            const { id_professor } = Req.params

            if (!data.nome || !data.codigo || !data.senha || !data.cpf) {
                throw new Error("Por favor, envie todos os dados obrigatórios")
            }

            if (!id_professor) {
                throw new Error("Por favor, envie o id")
            }

            const updatedProfessor = await professorService.update(id_professor, data)

            return Res.json(updatedProfessor)

        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }

    }

}

export default ProfessorController