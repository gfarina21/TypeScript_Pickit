import mongoose, { ConnectionOptions } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const {MONGODB_CNN ,MONGODB_CNN_TEST, NODE_ENV} = process.env;

const connectionString = NODE_ENV === 'test'
? MONGODB_CNN_TEST
: MONGODB_CNN

const dbConnection = async () => {
    
    try {
        const mongooseOptions: ConnectionOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true, 
        }
        const db = await mongoose.connect(`${connectionString}`, mongooseOptions); //`${process.env.MONGODB_CNN}`
        console.log('Database is connected to:', db.connection.name);

        } catch (error) {
            console.log(error);
            throw new Error ('Error starting the database');
            }

}

export default dbConnection;