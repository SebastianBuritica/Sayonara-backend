// Importamos nuestro modelo de Orden
import { Orden } from "../models/Orden.js";

// Creamos una funcion para obtener todas los ordenes
export async function getOrdenes(req, res) {
    try {
        const ordenes = await Orden.findAll({
            attributes: ['id', 'usuarioId', 'estado' ],
        });
        res.json(ordenes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para crear un orden
export async function createOrden(req, res) {
    try {
        const { usuarioId, estado } = req.body;
        const newOrden = await Orden.create({
            usuarioId,
            estado,
    });
        res.json(newOrden);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para obtener un orden
export async function getOrden(req, res) {
    const { id } = req.params;
    try {
        const orden = await Orden.findOne({
            attributes: ['id', 'usuarioId', 'estado' ],
            where: { id },
        });
        res.json(orden);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para actualizar un orden
export async function updateOrden(req, res) {
    const { id } = req.params;
    
    try {
        const orden = await Orden.findOne({
            attributes: ['id', 'usuarioId', 'estado' ],
            where: { id },
        }); 
        orden.set(req.body);
        
        await orden.save();

        res.json(orden);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para eliminar un orden
export async function deleteOrden(req, res) {
    const { id } = req.params;
    try {
        await Orden.destroy({
            where: { id },
        });
        return res.json({ message: 'Orden eliminada exitosamente' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}