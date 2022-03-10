import {Schema, model} from 'mongoose'

const OrderSchema = new Schema ({
    numOrder: {
        type: String,
        required: [true, 'the numOrder is required']
    },
    array: {
        type: Array,
        required: [true, 'a service is required']    
    },    
}, { timestamps: true });

export default model('Order', OrderSchema );