import { IAluno } from "../Models/Aluno"

class AlunoRepository {

    constructor() {

    }

    getAll(): IAluno[] {

        // Solicitar ao BD que busque todos os alunos
        
        return [{ nome: "Ale", matricula: "123"}]

    }

    getById(id: string): IAluno {

        // Solicitar ao BD que busque o aluno pelo id enviado pela rota

        return { nome: "Alezin", matricula: "123"}
    }

    add(data: IAluno): IAluno {

        // Solicitar ao BD que adicione um aluno

        return data

    }

    update(id: string, data: IAluno): IAluno {

        // Solicitar ao BD que modifique o aluno pelo id enviado pela rota

        return data

    }

    delete(id: string) {

        // Solicitar ao BD que delete o aluno que possua o id enviado pela rota

        return id

    }
}

export default AlunoRepository