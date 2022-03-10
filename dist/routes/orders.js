"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const orders_1 = require("../controllers/orders");
const db_validators_1 = require("../helpers/db-validators");
const validar_politica_1 = require("../middlewares/validar-politica");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
// 1 Registrar transaccion
router.post('/', [
    (0, express_validator_1.check)('patente', 'la patente es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('arreglo', 'el arreglo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('patente').custom(db_validators_1.existeCarPorPatente),
    (0, express_validator_1.check)('arreglo').custom(db_validators_1.sonIdMongo),
    validar_politica_1.esGrisPintura,
    validar_campos_1.validarCampos
], orders_1.postOrder);
exports.default = router;
