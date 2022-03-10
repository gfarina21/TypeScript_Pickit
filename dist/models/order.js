"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    patente: {
        type: String,
        required: [true, 'la patente es obligatoria'],
        trim: true
    },
    arreglo: {
        type: Array,
        required: [true, 'Necesita indicar un servicio']
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Order', OrderSchema);
