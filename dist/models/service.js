"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ServiceSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es obligatoria'],
        unique: true
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Service', ServiceSchema);
