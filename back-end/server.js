import 'dotenv/config';
import fastify from 'fastify';
import { DatabasePostgres } from './database_postgres.js';

const server = fastify();
const db = new DatabasePostgres();

server.register(import('@fastify/formbody'));

// Rota para criar um novo aluno
server.post('/alunos', async (request, reply) => {
  try {
    const { matricula_aluno, nome, telefone, endereco, cpf, data_nascimento } = request.body;

    const aluno = await db.createAluno({ matricula_aluno, nome, telefone, endereco, cpf, data_nascimento });

    reply.status(201).send(aluno);
  } catch (err) {
    console.error('Failed to create aluno', err);
    reply.status(500).send({ error: 'Failed to create aluno' });
  }
});

// Rota para listar alunos
server.get('/alunos', async (request, reply) => {
  try {
    const { search } = request.query;

    const alunos = await db.listAlunos(search);

    reply.send(alunos);
  } catch (err) {
    console.error('Failed to fetch alunos', err);
    reply.status(500).send({ error: 'Failed to fetch alunos' });
  }
});

// Rota para atualizar aluno por Matricula
server.put('/alunos/:matricula_aluno', async (request, reply) => {
  try {
    const { matricula_aluno } = request.params;
    const { nome, telefone, endereco, CPF, data_nascimento } = request.body;

    const aluno = await db.updateAluno(matricula_aluno, { nome, telefone, endereco, CPF, data_nascimento });

    if (!aluno) {
      reply.status(404).send({ error: `Aluno with matricula ${matricula_aluno} not found` });
      return;
    }

    reply.send(aluno);
  } catch (err) {
    console.error('Failed to update aluno', err);
    reply.status(500).send({ error: 'Failed to update aluno' });
  }
});

// Rota para deletar aluno por Matricula
server.delete('/alunos/:matricula_aluno', async (request, reply) => {
  try {
    const { matricula_aluno } = request.params;

    const aluno = await db.deleteAluno(matricula_aluno);

    if (!aluno) {
      reply.status(404).send({ error: `Aluno with matricula ${matricula_aluno} not found` });
      return;
    }

    reply.send({ message: `Aluno with matricula ${matricula_aluno} deleted` });
  } catch (err) {
    console.error('Failed to delete aluno', err);
    reply.status(500).send({ error: 'Failed to delete aluno' });
  }
});


// Configuração do servidor
const start = async () => {
    try {
      const address = '0.0.0.0';
      const port = 3333;
  
      await server.listen({
        port,
        address,
      });
  
      console.log(`Server listening on http://${address}:${port}`);
    } catch (err) {
      console.error('Error starting server:', err);
      process.exit(1);
    }
  };
  
  start();
