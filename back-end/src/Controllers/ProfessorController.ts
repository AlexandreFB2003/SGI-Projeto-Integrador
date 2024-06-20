import { Request, Response } from "express";
import path from 'path';

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

            await professorService.create(data)

            Res.redirect("/professor/login")

        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }

    }

    async login(Req: Request, Res: Response) {

        try {

            const { codigo, password } = Req.body

            if (!codigo || !password) {
                throw new Error("Por favor, envie todos os dados obrigatórios")
            }

            const loginProfessor = await professorService.login(codigo, password)

            if (loginProfessor) {

                Res.redirect("/professor/boletim")

            } else {

                Res.json({error: "Código ou senha inválidos"})

            }

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

    async getLoginPage(Req: Request, Res: Response) {

        Res.sendFile(path.join(__dirname, '..', '..', '..', 'Usuarios', 'login.html'))
    
    }

    async getBoletimPage(Req: Request, Res: Response) {

        Res.sendFile(path.join(__dirname, '..', '..', '..', 'professor', 'lancarNota.html'))
    
    }

    async getEditarPerfilPage(Req: Request, Res: Response) {

        Res.sendFile(path.join(__dirname, '..', '..', '..', 'Usuarios', 'editarPerfil.html'))
    
    }

    async getPortuguesPage(Req: Request, Res: Response) {

        Res.sendFile(path.join(__dirname, '..', '..', '..', 'professor', 'portugues.html'))
    
    }

    async getCienciasPage(Req: Request, Res: Response) {

        Res.sendFile(path.join(__dirname, '..', '..', '..', 'professor', 'ciencias.html'))
    
    }

    async getGeografiaPage(Req: Request, Res: Response) {

        Res.sendFile(path.join(__dirname, '..', '..', '..', 'professor', 'geografia.html'))
    
    }

    async getHistoriaPage(Req: Request, Res: Response) {

        Res.sendFile(path.join(__dirname, '..', '..', '..', 'professor', 'historia.html'))
    
    }

    async getInglesPage(Req: Request, Res: Response) {

        Res.sendFile(path.join(__dirname, '..', '..', '..', 'professor', 'ingles.html'))
    
    }

    async getMatematicaPage(Req: Request, Res: Response) {

        Res.sendFile(path.join(__dirname, '..', '..', '..', 'professor', 'matematica.html'))
    
    }

}

export default ProfessorController