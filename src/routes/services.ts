import {Router} from 'express'
import { getServices, postService } from '../controllers/services'

const router = Router();

// 1 Get all services 
router.get('/', getServices);

// 2 Post the service 
router.post('/', postService);

export default router;