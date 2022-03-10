import { RequestHandler } from 'express'
import Car from '../models/car'

const getCars: RequestHandler = async (req, res) => { 

    const cars = await Car.find().populate({ path: "services" });

    res.json(cars);
}

const getCar: RequestHandler = async (req, res) => { 

    const car = await Car.find({ patente: req.params.patente, status: true }).populate({
      path: "services"
    });                                            

    res.json({
      results: car
    });
    
}

const postCar: RequestHandler = async (req, res) => { 

    const patente  = req.body.patente.toUpperCase().trim();

    const carDB = await Car.findOne({ patente });
    if ( carDB ) {
      return res.status(400).json({
        msg: `A car with licensePlate ${ carDB.patente } is already registered`
      });
    }
    
    const body = req.body;
    const car = new Car ( body );

    await car.save();

    res.status(201).json(car);
}

const putCar: RequestHandler = async (req, res) => { 

    const { _id, patente, brand, model, year, ...body } = req.body;
    
    const car = await Car.findOneAndUpdate(
        { patente: req.params.patente },
         body, { new:true }).populate({path: "services"});

    res.json({
      results: car
    });
}  

const deleteCar: RequestHandler = async (req, res) => {
    
    const car = await Car.findOneAndUpdate(
        { patente: req.params.patente },
        { status:false },
        { new:true }).populate({path: "services"});

    res.json({
      results: car
    });        
}

export {
    getCars,
    getCar,
    postCar,
    putCar,
    deleteCar };