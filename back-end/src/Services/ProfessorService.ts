import { IProfessor } from "../Models/Professor"
import ProfessorRepository from "../Repositories/professorRepository"

const professorRepository = new ProfessorRepository() 

class ProfessorService {

    constructor() {

    }

    add(data: IProfessor): IProfessor {
        // FAZER REGRAS DE NEGOCIO

        // verificar se o professor já existe (pedir informação para o repository)
        // se ja existir, enviar uma mensagem de erro
        // se nao existir, pedir para o repository (que tem acesso ao BD) inserir o professor
        return professorRepository.add(data)
        
    }

    update(id: string, data: IProfessor): IProfessor {
        //FAZER REGRA DE NEGÓCIO

        //verificar se professor existe (repository)
        //se existe retornar erro
        //se não existe fazer alteração (repository)
        return professorRepository.update(id, data)

    }

}

export default ProfessorService