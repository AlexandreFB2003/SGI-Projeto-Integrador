export default async function professorRoutes(server, options) {
    server.get('/', async (request, reply) => {
        return 'Página do Professor';
    });

    // Rota para a página de matérias
    server.get('/materias', async (request, reply) => {
        // Lógica para retornar a página de matérias
        return 'Página de Matérias';
    });

    server.post('/materias/post', async (request, reply) => {
        const { postId, conteudo } = resquest.body;

        return 'Post Adicionado';
    });

    server.put('/materias/post/:postId', async (request, reply) => {
        const postId = resquest.params.postId;
        const { conteudo } = resquest.body;

        return 'Post Alterado com sucesso';
    });

    server.delete('/materias/post/:postId', async (request, reply) => {
        const postId = resquest.params.postId;

        return 'Post removido com sucesso';
    });


    // Rota para a página de boletim
    server.get('/boletim', async (request, reply) => {
        // Lógica para retornar a página de boletim
        return 'Página de Boletim';
    });

    server.post('/boletim/post', async (request, reply) => {
        const { postId, conteudo } = resquest.body;

        return 'Post Adicionado';
    });

    // Adicione outras rotas para professores aqui, se necessário
}