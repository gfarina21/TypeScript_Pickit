import request from 'supertest'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import {Router} from 'express'
import Server from '../../src/server'
import Car from '../../src/models/car'
import { IdMongo, carExists } from '../../src/helpers/db-validators'
/////////////////////////////////////////////////////////////
const server = new Server();
const router = Router();

const initialCars = [
    {
        patente: '03',
        brand: 'Ford',
        model: 'Focus',
        year: 2015,
        colour: 'red',
        status: true,
        owner: {
            name: 'Hernan',
            surname: 'Farina'
        },
        services: [] 
    },
    {
        patente: '04',
        brand: 'Renault',
        model: 'Sandero',
        year: 2016,
        colour: 'black',
        status: true,
        owner: {
            name: 'Pablo',
            surname: 'Farina'
        },
        services: [],
        }
];
/////////////////////////////////////////////////////////////
const newCar = [
    {
        patente: '05',
        brand: 'Chevrolet',
        model: 'Onix',
        year: 2017,
        colour: 'gray',
        status: true,
        owner: {
            name: 'Joaquin',
            surname: 'Gallardo'
        },
        services: [] 
    }];
//////////////////////////////////////////////////////////////
beforeAll(async() => {
    await Car.deleteMany({})
    
    const car1 = new Car(initialCars[0])
    await car1.save()
    
    const car2 = new Car(initialCars[1])
    await car2.save()

})
////////////////////////////////////////////////////////
describe('getAllCars', () => {
    test('There are two cars', async ( ) => { 
            const cars = await Car.find();
            expect(cars).toHaveLength(2);
    })
});
//////////////////////////////////////////////////////////
describe('getCar', () => {
    test('Should respond with the owner of initialCars[0]', async ( ) => { 
        const car = await Car.find({ patente: '03', status: true });
            expect(car[0].owner).toEqual(initialCars[0].owner);
    })
});
//////////////////////////////////////////////////////////
describe('putCar', () => {
    test('Update only the colour', async ( ) => { 
        const newData = [{ colour: 'blue' }];
        const car = await Car.findOneAndUpdate({ patente: '04' }, {colour : newData[0].colour}, { new:true });
        expect(car.colour).toBe('blue');
    });
});
////////////////////////////////////////////////////////
afterAll( () => {
     server.app.listen().close();
     mongoose.connection.close();
});
/////////////////////////////////////////////////////////////////////

