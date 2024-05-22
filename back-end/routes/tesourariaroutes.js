export default async function tesourariaRoutes(server, options) {
    server.get('/', async (request, reply) => {
        return 'Página da Tesouraria'
    })
    // Adicione outras rotas para a tesouraria aqui
}