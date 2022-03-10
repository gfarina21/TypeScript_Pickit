"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sonIdMongo = exports.existeCarPorPatente = void 0;
const car_1 = __importDefault(require("../models/car"));
const service_1 = __importDefault(require("../models/service"));
//////////////////////////////////////////////////////////////
const existeCarPorPatente = (patente) => __awaiter(void 0, void 0, void 0, function* () {
    const existeCar = yield car_1.default.findOne({ patente });
    if (!existeCar) {
        throw new Error('La patente no figura registrada');
    }
});
exports.existeCarPorPatente = existeCarPorPatente;
////////////////////////////////////////////////////////////
const sonIdMongo = (arreglo) => __awaiter(void 0, void 0, void 0, function* () {
    for (var i = 0; i < (arreglo.length); i++) {
        var idMongo = arreglo[i];
        const existeId = yield service_1.default.findOne({ _id: idMongo });
        if (!existeId) {
            throw new Error('El id del servicio no está registrado');
        }
    }
});
exports.sonIdMongo = sonIdMongo;
///////////////////////////////////////////////////////////
