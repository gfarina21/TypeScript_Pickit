import {Schema, model} from 'mongoose'

const ServiceSchema = new Schema ({
    nameService: {
        type: String,
        required: [true, 'the nameService is required'],
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'the price is required']    
    },
    
}, { timestamps: true });

export default model('Service', ServiceSchema );