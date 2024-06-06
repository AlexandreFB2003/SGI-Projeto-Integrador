import { Professor } from "../../Models/Professor"

class ProfessorRepository {

    private professores: Professor[]

    constructor() {
        this.professores = []
    }

    get(): Professor[] {

        return this.professores

    }

    add(data: Professor): Professor {

        this.professores.push(data)
        return data

    }

    update(data: Professor, position: number): Professor {

        this.professores[position] = data
        return data

    }

}

export default ProfessorRepository