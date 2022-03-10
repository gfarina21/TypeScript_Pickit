"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CarSchema = new mongoose_1.Schema({
    patente: {
        type: String,
        required: [true, 'La patente es obligatoria'],
        unique: true,
        trim: true
    },
    marca: {
        type: String,
        required: [true, 'La marca es obligatoria']
    },
    modelo: {
        type: String,
        required: [true, 'El modelo es obligatorio']
    },
    año: {
        type: Number,
        required: [true, 'El año es obligatorio']
    },
    color: {
        type: String,
        required: [true, 'El color es obligatorio'],
        trim: true
    },
    estado: {
        type: Boolean,
        default: true,
        require: true
    },
    propietario: {
        nombre: {
            type: String,
            require: true
        },
        apellido: {
            type: String,
            require: true
        }
    },
    services: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Service" }]
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Car', CarSchema);
