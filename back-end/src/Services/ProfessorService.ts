import { Professor } from "../Models/Professor"

import InMemoryProfessorRepository from "../Repositories/In-Memory/InMemoryProfessorRepository"
import PrismaProfessorRepository from "../Repositories/prisma/PrismaProfessorRepository"

class ProfessorService {

    constructor(private _professorRepository: InMemoryProfessorRepository | PrismaProfessorRepository){
        
    }

    async getAll() {

        const professorData = await this._professorRepository.getAll()
        return { data: professorData }

    }

    async create(data: Professor): Promise<{ data: Professor }>{

        const professorData = await this._professorRepository.getByEmail(data.email)

        if (professorData) {
            throw new Error("Já existe um usuário com este email")
        }

        const addProfessorData = await this._professorRepository.create(data)

        return { data: addProfessorData }

    }

    async update(id_professor: string, data: Professor): Promise<Professor> {

        const updatedProfessor = await this._professorRepository.update(id_professor, data)
        return updatedProfessor

    }

}

export default ProfessorService