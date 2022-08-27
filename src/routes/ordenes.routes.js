import { Router } from "express";

// Creamos las funciones en nuestros controllers para despues ser importados
import { 
    getOrdenes,
    createOrden,
    getOrden,
    updateOrden,
    deleteOrden,
} from "../controllers/orden.controller.js";

const router = Router();

// Creamos las rutas
router.get('/', getOrdenes);
router.post('/', createOrden);
router.get('/:id', getOrden);
router.put('/:id', updateOrden);
router.delete('/:id', deleteOrden);
export default router;