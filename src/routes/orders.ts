import {Router} from 'express'
import { check } from 'express-validator'
import { postOrder } from '../controllers/orders'
import { orderExists, IdMongo } from '../helpers/db-validators'
import { grayPaint }  from '../middlewares/validate-politics'
import { validateFields } from '../middlewares/validate-field'

const router = Router();

// 1 Post order
router.post('/', [   
        check ('numOrder', 'the numOrder is required').not().isEmpty(),
        check ('array', 'the array is required').not().isEmpty(),
        check('numOrder').custom( orderExists ),
        check('array').custom( IdMongo ),
        grayPaint,
        validateFields
], postOrder);

export default router;