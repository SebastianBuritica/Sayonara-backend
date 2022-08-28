import { Router } from "express";

// Creamos las funciones en nuestros controllers para despues ser importados
import { 
    getUsuarios, 
    createUsuario, 
    getUsuario, 
    updateUsuario, 
    deleteUsuario,
    getUsuarioOrdenes,
    getUsuarioProductos
} from "../controllers/usuario.controller.js";

const router = Router();

// Creamos las rutas
router.get('/', getUsuarios);
router.post('/', createUsuario);
router.get('/:id', getUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

// Obtener las ordenes de un usuario
router.get('/:id/ordenes', getUsuarioOrdenes);

// Obtener los productos de un usuario
router.get('/:id/productos', getUsuarioProductos);

export default router;