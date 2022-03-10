"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const cars_1 = require("../controllers/cars");
const validar_campos_1 = require("../middlewares/validar-campos");
const db_validators_1 = require("../helpers/db-validators");
const router = (0, express_1.Router)();
// 1 Obtener todos los autos - servicio público
router.get('/', cars_1.getCars);
// 2 Obtener un auto por patente - servicio público
router.get('/:patente', [
    (0, express_validator_1.check)('patente', 'la patente es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('patente').custom(db_validators_1.existeCarPorPatente),
    validar_campos_1.validarCampos
], cars_1.getCar);
// 3 Registrar nuevo auto - servicio publico
router.post('/', [
    (0, express_validator_1.check)('patente', 'la patente es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('marca', 'la marca es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('modelo', 'el modelo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('año', 'el año es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('color', 'el color es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('propietario', 'el propietario es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], cars_1.postCar);
// 4 Actualizar un auto por patente - servicio publico
router.put('/:patente', [
    (0, express_validator_1.check)('patente', 'la patente es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('patente').custom(db_validators_1.existeCarPorPatente),
    validar_campos_1.validarCampos
], cars_1.putCar);
// 5 Borrar un auto por patente - servicio publico
router.delete('/:patente', [
    (0, express_validator_1.check)('patente', 'la patente es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('patente').custom(db_validators_1.existeCarPorPatente),
    validar_campos_1.validarCampos
], cars_1.deleteCar);
exports.default = router;
