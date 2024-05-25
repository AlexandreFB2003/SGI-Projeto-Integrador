import { Request, Response } from "express";
import ProfessorService from "../Services/ProfessorService";

const professorService = new ProfessorService()

class ProfessorController {

    constructor() {
        
    }

    add(req: Request, res: Response) {

        // Validar dados
        // Sanitizar dados

        // Enviar dados para SERVICE
        const result = professorService.add(req.body)

        res.json(result)

    }

    update(req: Request, res: Response) {

        const result = professorService.update(req.params.id, req.body)

        res.json(result)

    }

}

export default ProfessorController