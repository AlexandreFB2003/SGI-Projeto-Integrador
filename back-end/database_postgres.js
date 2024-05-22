import { randomUUID } from "node:crypto"
import { sql } from "./db.js"

export class DatabasePostgres {

    async list(search) {
        let alunos

        if (search) {
            alunos = await sql`select * from tb_aluno where nome ilike`
        } else {
            alunos = await sql`select * from tb_aluno`
        }
        
    }

    create(user) {
        const matricula_aluno = randomUUID()
    }

    update(id, user) {
        
    }

    delete(id) {
        
    }



}