import {Router} from 'express'
import { check } from 'express-validator'
import { getCars, 
        getCar, 
        postCar, 
        putCar,
        deleteCar } from '../controllers/cars'
import { validateFields } from '../middlewares/validate-field'
import { carExists } from '../helpers/db-validators'

const router = Router();

// 1 get all cars 
router.get('/', getCars);

// 2 get a car 
router.get('/:patente', [
    check ('patente', 'the license Plate is required').not().isEmpty(),
    check('patente').custom( carExists ),
    validateFields
], getCar);

// 3 Register new car 
router.post('/', [
    check ('patente', 'the license Plate is required').not().isEmpty(),
    check ('brand', 'the brand is required').not().isEmpty(),
    check ('model', 'the model is required').not().isEmpty(),
    check ('year', 'the year is required').not().isEmpty(),
    check ('colour', 'the colour is required').not().isEmpty(),
    check ('owner', 'the owner is required').not().isEmpty(),
    validateFields
], postCar);

// 4 Update a car 
router.put('/:patente', [
    check ('patente', 'the license Plate is required').not().isEmpty(),
    check('patente').custom( carExists ),
    validateFields
], putCar);

// 5 Delete a car 
router.delete('/:patente', [
    check ('patente', 'the license Plate is required').not().isEmpty(),
    check('patente').custom( carExists ),
    validateFields
], deleteCar);


export default router;