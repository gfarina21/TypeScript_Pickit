import { RequestHandler } from 'express'
import Car from '../models/car'

export const grayPaint: RequestHandler = async (req, res, next) => {

    const numOrder  = req.body.numOrder.toUpperCase().trim();
    const array = req.body.array;

    const car = await Car.findOne({ patente : numOrder, status: true }).populate({ path: "services" });      
    
    const colour = car.colour.toUpperCase().trim();

    const idPaint = '6224e8732b629b2fa74ae8f8';
    
    if ( colour === "GRAY" && array.indexOf(idPaint) !== -1 ) {
        return res.status(400).json({
            msg:'GRAY paint is not allowed'
        });  
    }
    next();    
}
