import express from 'express'
import cors from 'cors'
import dbConnection from "./database/config"
import carRoutes from './routes/cars'
import serviceRoutes from './routes/services'
import orderRoutes from './routes/orders'
import dotenv from 'dotenv'
dotenv.config()
///////////////////////////////////////////////////////////
class Server {
    app: express.Application; 
    port: any;
    paths: any;
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB() {        
        await dbConnection();
    }

    middlewares() {

        this.app.use( cors() );
        this.app.use( express.json() );
        this.paths = {
            cars: '/api/cars',
            services: '/api/services',
            orders: '/api/orders',
        }
    }

    routes() {
        this.app.use( this.paths.cars , carRoutes);
        this.app.use( this.paths.services , serviceRoutes );
        this.app.use( this.paths.orders , orderRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}

export default Server;
