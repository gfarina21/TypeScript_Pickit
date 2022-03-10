import {Schema, model} from 'mongoose'

const CarSchema = new Schema ({
    patente: {
        type: String,
        required: [true, 'the license Plate is required'],
        trim: true
    },
    brand: {
        type: String,
        required: [true, 'the brand is required']    
    },
    model: {
        type: String,
        required: [true, 'the model is required']   
    },
    year: {
        type: Number,
        required: [true, 'the year is required']    
    },
    colour: {
        type: String,
        required: [true, 'the colour is required']
    },
    status: {
        type: Boolean,
        default: true,
        require: true
    },
    owner: {
        name: {
            type: String,
            require: true
        },
        surname: {
            type: String,
            require: true
        }
    },
    services: [ { type: Schema.Types.ObjectId, ref: "Service" } ]
    
}, { timestamps: true });

export default model('Car', CarSchema );