import { Router } from "express";

// Creamos las funciones en nuestros controllers para despues ser importados
import { 
    getUsuarios, 
    createUsuario, 
    getUsuario, 
    updateUsuario, 
    deleteUsuario 
} from "../controllers/usuario.controller.js";

const router = Router();

// Creamos las rutas
router.get('/', getUsuarios);
router.post('/', createUsuario);
router.get('/:id', getUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

export default router;