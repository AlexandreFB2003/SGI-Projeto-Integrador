import { Request, Response } from "express";
import ProfessorService from "../Services/ProfessorService";

const professorService = new ProfessorService()

class ProfessorController {

    constructor(){

    }

    get(Req: Request, Res: Response) {

        const result = professorService.get()
        return Res.json(result)

    }

    add(Req: Request, Res: Response) {

        const { nome, codigo, senha, cpf, telefone, email, dt_nascimento } = Req.body

        if (nome && codigo && senha && cpf && telefone && email && dt_nascimento) {

            const result = professorService.add(Req.body)
            Res.json(result)

        } else {

            Res.json({ error: "Invalid parameters" })
            Res.status(401)

        }

    }

    update(Req: Request, Res: Response) {

        const { nome, codigo, senha, cpf, telefone, email, dt_nascimento } = Req.body
        const { id_professor } = Req.params

        if (nome && codigo && senha && cpf && telefone && email && dt_nascimento) {

            const result = professorService.update(Req.body, id_professor)
            Res.json(result)

        } else {

            Res.json({ error: "Invalid parameters" })
            Res.status(401)

        }


        
    }

}

export default ProfessorController