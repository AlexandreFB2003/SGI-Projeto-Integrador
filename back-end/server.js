// back-end/server.js
import Fastify from 'fastify'
import alunoRoutes from './routes/alunoroutes.js'
import professorRoutes from './routes/professorroutes.js'
import tesourariaRoutes from './routes/tesourariaroutes.js'

const server = Fastify()

// Registrar as rotas
server.register(alunoRoutes, { prefix: '/aluno' })
server.register(professorRoutes, { prefix: '/professor' })
server.register(tesourariaRoutes, { prefix: '/tesouraria' })

// Rota GET para o caminho raiz "/"
server.get('/', async (request, reply) => {
    return { message: 'Bem-vindo ao servidor Fastify!' }
})

server.listen({ port: 3333 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})


