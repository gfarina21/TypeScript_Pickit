import { RequestHandler } from 'express'
import Service from '../models/service'

export const getServices: RequestHandler = async (req , res) => { 

    const services = await Service.find();
    
    res.json(services);
}

export const postService: RequestHandler = async (req, res) => {

    const body = req.body;
    const service = new Service( body );

    await service.save();

    res.status(201).json(service);
}
