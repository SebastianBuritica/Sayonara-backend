import { Router } from "express";

// Creamos las funciones en nuestros controllers para despues ser importados
import { 
    getProductos,
    createProducto,
    getProducto,
    updateProducto,
    deleteProducto,
} from "../controllers/producto.controller.js";

const router = Router();

// Creamos las rutas
router.get('/', getProductos);
router.post('/', createProducto);
router.get('/:id', getProducto);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);
export default router;