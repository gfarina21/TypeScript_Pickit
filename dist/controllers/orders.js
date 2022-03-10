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
exports.postOrder = void 0;
const car_1 = __importDefault(require("../models/car"));
const service_1 = __importDefault(require("../models/service"));
const order_1 = __importDefault(require("../models/order"));
const postOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const patente = req.body.patente.toUpperCase().trim();
    const arreglo = req.body.arreglo;
    const car = yield car_1.default.findOne({ patente, estado: true }).populate({ path: "services" });
    Array.prototype.push.apply(car.services, arreglo);
    yield car.save();
    var costoTotal = 0;
    console.log(arreglo.length);
    for (var i = 0; i < (arreglo.length); i++) {
        var idServicio = arreglo[i];
        const servicio = yield service_1.default.findOne({ _id: idServicio });
        costoTotal += servicio.precio;
    }
    res.json({
        costoTotal
    });
    const body = req.body;
    const order = new order_1.default(body);
    yield order.save();
});
exports.postOrder = postOrder;
