import { Professor } from "../../Models/Professor"
import ProfessorPrismaRepository from "../prisma/PrismaProfessorRepository"

class InMemoryProfessorRepository implements ProfessorPrismaRepository{

    private professores: Professor[]

    constructor() {
        this.professores = [
            {
                nome: "Alixandre Pires",
                codigo: "123",
                senha: "afb@",
                cpf: "00000000000",
                telefone: "(61) 99999-9999",
                email: "aluno@gmail.com",
                dt_nascimento: "10/09/2003"

            }
        ]
    }

    async getAll(): Promise<Professor[]> {

        return this.professores

    }

    async getByEmail(email: string | null): Promise<Professor | null> {

        const dataUser = this.professores.find((item) => item.email === email)

        if (!dataUser) {
            return null
        }

        return dataUser

    }

    async create(data: Professor): Promise<Professor> {

        this.professores.push(data)
        return data

    }

    async login(codigo: string, senha: string) {

        const professor = this.professores.find(prof => prof.codigo === codigo && prof.senha === senha);

        return professor !== undefined;
    }

    async update(cd_professor: string, data: Professor): Promise<Professor> {

        const index = this.professores.findIndex((item) => item.codigo === cd_professor)
        this.professores[index] = data
        return data

    }

}

export default InMemoryProfessorRepository