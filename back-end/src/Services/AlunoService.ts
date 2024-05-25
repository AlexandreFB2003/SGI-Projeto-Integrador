import { IAluno } from "../Models/Aluno"
import AlunoRepository from "../Repositories/AlunoRepository"

const alunoRepository = new AlunoRepository()

class AlunoService {

    constructor() {

    }

    getAll(): IAluno[] {

        // Pedir para o repository solicitar ao BD todos os registros de aluno
        return alunoRepository.getAll()

    }

    getById(id: string): IAluno {

        // Pedir para o repository solicitar ao BD o registro do usuário que tenha o id que veio da rota
        return alunoRepository.getById(id)

    }

    add(data: IAluno): IAluno {

        // Verificar se esse aluno ja existe (pedir a informação para o repository)

        // Se já existir retornar erro
        
        // Se não existir solicitar que o repository faça a inserção do aluno no BD
        return alunoRepository.add(data)

    }

    update(id: string, data: IAluno): IAluno {

        // Verificar se esse aluno ja existe (pedir a informação para o repository)

        // Se não existir retornar erro

        // Se existir solicitar ao repository alterar os dados do aluno no BD
        return alunoRepository.update(id, data)

    }

    delete(id: string): string {

        // Verificar se esse aluno existe (pedir a informação para o repository)

        // Se não existe retornar erro

        // Se existe solicitar ao repository para deletar os dados do aluno no BD
        return alunoRepository.delete(id)
        
    }
}

export default AlunoService