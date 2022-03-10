import Car from '../models/car'
import Service  from '../models/service'
import Order  from '../models/order'
//////////////////////////////////////////////////////////////

const carExists = async (patente: any) => {  
    const Exists = await Car.findOne({ patente });
    if ( !Exists ) {
        throw new Error ('The license plate is not registered');
    }
};
//////////////////////////////////////////////////////////////

const orderExists = async (numOrder: any) => {  
    const Exists = await Car.findOne({ patente : numOrder });
    if ( !Exists ) {
        throw new Error ('The numOrder is not registered');
    }
};

////////////////////////////////////////////////////////////
const IdMongo = async (array: string[]) => {  
        
    for (var i=0; i< (array.length) ; i++) {
        
        var idMongo = array[i];
        const ExistsId = await Service.findOne({ _id:idMongo }); 
        if ( !ExistsId ) {
            throw new Error (' service id is not registered');
        }
    }
};
///////////////////////////////////////////////////////////

export {
    carExists,
    orderExists,
    IdMongo
}