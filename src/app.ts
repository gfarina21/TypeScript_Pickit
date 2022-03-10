import { config as dotenv } from 'dotenv'
dotenv();

import Server from './server'

const server = new Server();

server.listen();