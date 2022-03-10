import { RequestHandler } from 'express'
import Car from '../models/car'
import Service from '../models/service'
import Order from '../models/order'


export const postOrder: RequestHandler = async (req, res) => { 

    const numOrder  = req.body.numOrder.toUpperCase().trim();
    const array = req.body.array;

    const car = await Car.findOne({ patente: numOrder , status: true }).populate({ path: "services" });      
    Array.prototype.push.apply( car.services, array);
    res.json(car);

    await car.save();
  
    var totalPrice=0;
    
    for (var i=0; i< (array.length) ; i++) {
        
        var idService = array[i];
        const service = await Service.findOne( {_id:idService} ); 
        totalPrice += service.price; 
        
    }
  
    res.json({
        totalPrice
    });

    const body = req.body;
    const order = new Order ( body );
    await order.save();
}