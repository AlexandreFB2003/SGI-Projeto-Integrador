import express from 'express'
import router from './src/routes'
import path from 'path';

const server = express()

server.use('/static', express.static(path.join(__dirname, '..', 'professor')));

server.use('/static', express.static(path.join(__dirname, '..', 'Usuarios')));

server.use(express.json())

server.use(express.urlencoded({extended: true}))

server.use(router)

server.listen(3000)

