import mongoose from 'mongoose'
import Server from '../src/server'

const server = new Server();

test('server is a Objet', async () => {   
    expect(server).toBeInstanceOf(Object);
});

afterAll( () => {
    server.app.listen().close()
    mongoose.connection.close()
})