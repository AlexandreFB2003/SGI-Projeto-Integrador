import { sql } from './db.js';

export class DatabasePostgres {
  async createAluno({ matricula_aluno, nome, telefone, endereco, cpf, data_nascimento }) {
    try {
      const result = await sql`
        INSERT INTO tb_aluno (matricula_aluno, nome, telefone, endereco, CPF, data_nascimento)
        VALUES (${matricula_aluno}, ${nome}, ${telefone}, ${endereco}, ${cpf}, ${data_nascimento})
        RETURNING *
      `;
      return result;
    } catch (err) {
      console.error('Failed to create aluno', err);
      throw err;
    }
  }

  async listAlunos(search) {
    try {
      let query = 'SELECT * FROM tb_aluno';

      if (search) {
        query += sql` WHERE nome ILIKE ${`%${search}%`}`;
      }

      const result = await sql.unsafe(query);
      return result;
    } catch (err) {
      console.error('Failed to fetch alunos', err);
      throw err;
    }
  }

  async updateAluno(matricula_aluno, { nome, telefone, endereco, cpf, data_nascimento }) {
    try {
      const result = await sql`
        UPDATE tb_aluno
        SET nome = ${nome}, telefone = ${telefone}, endereco = ${endereco}, CPF = ${cpf}, data_nascimento = ${data_nascimento}
        WHERE matricula_aluno = ${matricula_aluno}
        RETURNING *
      `;
      return result;
    } catch (err) {
      console.error('Failed to update aluno', err);
      throw err;
    }
  }

  async deleteAluno(matricula_aluno) {
    try {
      const result = await sql`
        DELETE FROM tb_aluno
        WHERE matricula_aluno = ${matricula_aluno}
        RETURNING *
      `;
      return result;
    } catch (err) {
      console.error('Failed to delete aluno', err);
      throw err;
    }
  }
}
