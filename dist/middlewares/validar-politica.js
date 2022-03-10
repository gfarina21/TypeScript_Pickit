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
exports.esGrisPintura = void 0;
const car_1 = __importDefault(require("../models/car"));
const esGrisPintura = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const patente = req.body.patente.toUpperCase().trim();
    const arreglo = req.body.arreglo;
    const car = yield car_1.default.findOne({ patente, estado: true }).populate({ path: "services" });
    const color = car.color.toUpperCase().trim();
    const idPintura = '6224e8732b629b2fa74ae8f8';
    if (color === "GRIS" && arreglo.indexOf(idPintura) !== -1) {
        return res.status(400).json({
            msg: 'No se permite pintura GRIS'
        });
    }
    next();
});
exports.esGrisPintura = esGrisPintura;
