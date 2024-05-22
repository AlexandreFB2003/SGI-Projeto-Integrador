export default async function alunoRoutes(server, options) {
    server.get('/', async (request, reply) => {
        return 'Página do Aluno';
    });

    // Rota para editar perfil do aluno
    server.get('/editar-perfil', async (request, reply) => {
        // Lógica para carregar dados do perfil do aluno e renderizar a página de edição de perfil (pode ser feito com um template engine como Handlebars, por exemplo)
        return 'Página de edição de perfil do aluno';
    });

    // Rota para visualizar matérias do aluno
    server.get('/materias', async (request, reply) => {
        // Lógica para obter matérias do aluno e renderizar a página de visualização de matérias
        const materias = ['Matemática', 'História', 'Ciências'];
        return materias;
    });

    // Rota para visualizar boletim do aluno
    server.get('/boletim', async (request, reply) => {
        // Lógica para obter boletim do aluno e renderizar a página de visualização do boletim
        const boletim = {
            disciplina1: { nota1: 8, nota2: 7 },
            disciplina2: { nota1: 9, nota2: 8 },
            disciplina3: { nota1: 7, nota2: 6 }
        };
        return boletim;
    });

    // Adicione outras rotas para alunos aqui, como adicionar tarefas, etc.
}