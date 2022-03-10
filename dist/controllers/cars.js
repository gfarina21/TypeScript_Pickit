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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.putCar = exports.postCar = exports.getCar = exports.getCars = void 0;
const car_1 = __importDefault(require("../models/car"));
const getCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cars = yield car_1.default.find().populate({ path: "services" });
    res.json(cars);
});
exports.getCars = getCars;
const getCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const car = yield car_1.default.find({ patente: req.params.patente, estado: true }).populate({
        path: "services"
    });
    res.json({
        results: car
    });
});
exports.getCar = getCar;
const postCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const patente = req.body.patente.toUpperCase().trim();
    const carDB = yield car_1.default.findOne({ patente });
    if (carDB) {
        return res.status(400).json({
            msg: `El auto con patente ${carDB.patente} ya está registrado`
        });
    }
    const body = req.body;
    const car = new car_1.default(body);
    yield car.save();
    res.status(201).json(car);
});
exports.postCar = postCar;
const putCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { _id, patente, marca, modelo, año } = _a, body = __rest(_a, ["_id", "patente", "marca", "modelo", "a\u00F1o"]);
    const car = yield car_1.default.findOneAndUpdate({ patente: req.params.patente }, body, { new: true }).populate({ path: "services" });
    res.json({
        results: car
    });
});
exports.putCar = putCar;
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const car = yield car_1.default.findOneAndUpdate({ patente: req.params.patente }, { estado: false }, { new: true }).populate({ path: "services" });
    res.json({
        results: car
    });
});
exports.deleteCar = deleteCar;
