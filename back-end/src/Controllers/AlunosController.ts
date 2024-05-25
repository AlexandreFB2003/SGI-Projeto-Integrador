import { Request, Response } from "express";
import AlunoService from "../Services/AlunoService";

const alunoService = new AlunoService()

class AlunosController {

    constructor() {

    }

    getAll(req: Request, res: Response) {

        // Validar dados

        // Enviar dados para o SERVICE
        const result = alunoService.getAll()

        res.json(result)

    }

    getByID(req: Request, res: Response) {

        // Validar dados

        // Enviar dados para o SERVICE
        const result = alunoService.getById(req.params.id)

        res.json(result)

    }

    add(req: Request, res: Response) {

        // Validar dados

        // Enviar dados para o SERVICE
        const result = alunoService.add(req.body)

        res.json(result)

    }

    update(req: Request, res: Response) {

        // Validar dados

        // Enviar dados para o SERVICE
        const result = alunoService.update(req.params.id, req.body)

        res.json(result)

    }

    delete(req: Request, res: Response) {
        
        // Validar dados

        // Enviar dados para o SERVICE
        const result = alunoService.delete(req.params.id)

        res.json({result})
    }


}

export default AlunosController