"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_1 = require("../controllers/services");
const router = (0, express_1.Router)();
// 1 Obtener todos los servicios existentes - servicio publico
router.get('/', services_1.getServices);
// 2 Registrar en la DB un "Tipo de Servicio" - servicio privado
router.post('/', services_1.postService);
exports.default = router;
