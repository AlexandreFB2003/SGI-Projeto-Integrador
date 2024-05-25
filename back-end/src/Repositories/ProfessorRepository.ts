import { IProfessor } from "../Models/Professor"

class ProfessorRepository {

    constructor() {

    }

    add(data: IProfessor): IProfessor {

        // Solicitar que o BD adicione um professor
        
        return data

    }

    update(id: string, data: IProfessor): IProfessor {

        // Solicitar ao BD que atualize os dados de um usuário pelo id

        return data

    }

}

export default ProfessorRepository