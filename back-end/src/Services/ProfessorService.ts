import { Professor } from "../Models/Professor"
import ProfessorRepository from "../Repositories/In-Memory/ProfessorRepository"

const professorRepository = new ProfessorRepository()

class ProfessorService {

    constructor(){
        
    }

    get() {

        const result = professorRepository.get()

        const professores: Professor[] = []

        result.map((obj) => {

            professores.push(obj)

        })

        return professores

    }

    getIndexById(cd_professor: string): number | null {

        const result = professorRepository.get()

        let position: number | null = null

        result.map((obj, index) => {

            if (obj.codigo === cd_professor) {

                position = index

            }

        })

        return position

    }

    add(data: Professor): Professor {

        return professorRepository.add(data)

    }

    update(data: Professor, cd_professor: string) {

        const position = this.getIndexById(cd_professor)

        if (position !== null) {
            return professorRepository.update(data, position)
        } else {
            return {}
        }

    }

}

export default ProfessorService