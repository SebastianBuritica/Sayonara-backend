// Importamos nuestro modelo de producto
import { Producto } from "../models/Producto.js";

// Creamos una funcion para obtener todos los productos
export async function getProductos(req, res) {
    try {
        const productos = await Producto.findAll({
            attributes: ['id', 'usuarioId', 'ordenId', 'nombre', 'precio', 'descripcion'],
        });
        res.json(productos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para crear un producto
export async function createProducto(req, res) {
    try {
        const { usuarioId, ordenId, nombre, precio, descripcion } = req.body;
        const newProducto = await Producto.create({
            usuarioId,
            ordenId,
            nombre,
            precio,
            descripcion,
        });
        res.json(newProducto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para obtener un producto
export async function getProducto(req, res) {
    const { id } = req.params;
    try {
        const producto = await Producto.findOne({
            attributes: ['id', 'usuarioId', 'ordenId', 'nombre', 'precio', 'descripcion'],
            where: { id },
        });
        res.json(producto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para actualizar un producto
export async function updateProducto(req, res) {
    const { id } = req.params;
    
    try {
        const producto = await Producto.findOne({
            attributes: ['id', 'usuarioId', 'ordenId', 'nombre', 'precio', 'descripcion'],
            where: { id },
        }); 
        producto.set(req.body);
        
        await producto.save();

        res.json(producto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para eliminar un producto
export async function deleteProducto(req, res) {
    const { id } = req.params;
    try {
        await Producto.destroy({
            where: { id },
        });
        return res.json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}