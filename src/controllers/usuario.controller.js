// Importamos nuestro modelo de Usuario
import { Orden } from "../models/Orden.js";
import { Usuario } from "../models/Usuario.js";
import { Producto } from "../models/Producto.js";

// Creamos una funcion para obtener todas los usuarios
export async function getUsuarios(req, res) {
    try {
        const usuarios = await Usuario.findAll({
            attributes: ['id', 'nombre', 'direccion', 'telefono', 'email' ],
        });
        res.json(usuarios);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para crear un usuario
export async function createUsuario(req, res) {
    try {
        const { nombre, direccion, telefono, email } = req.body;
        const newUsuario = await Usuario.create({
            nombre,
            direccion,
            telefono,
            email,
    });
        res.json(newUsuario);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para obtener un usuario
export async function getUsuario(req, res) {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findOne({
            attributes: ['id', 'nombre', 'direccion', 'telefono', 'email'],
            where: { id },
        });
        res.json(usuario);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para actualizar un usuario
export async function updateUsuario(req, res) {
    const { id } = req.params;
    
    try {
        const usuario = await Usuario.findOne({
            attributes: ['id', 'nombre', 'direccion', 'telefono', 'email'],
            where: { id },
        }); 
        
        usuario.set(req.body);
        
        await usuario.save();

        res.json(usuario);
    } catch (error) {
        
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para eliminar un usuario
export async function deleteUsuario(req, res) {
    const { id } = req.params;
    try {
        await Usuario.destroy({
            where: { id },
        });
        return res.json({ message: 'Usuario eliminada exitosamente' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para obtener las ordenes de un usuario
export async function getUsuarioOrdenes(req, res) {
    const { id } = req.params;
    try {
        const ordenes = await Orden.findAll({
            attributes: ['id', 'usuarioId', 'estado'],
            where: { usuarioId: id },
        });
        res.json(ordenes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Creamos una funcion para obtener los productos de un usuario
export async function getUsuarioProductos(req, res) {
    const { id } = req.params;
    try {
        const productos = await Producto.findAll({
            attributes: ['id', 'usuarioId', 'ordenId', 'nombre', 'precio', 'descripcion'],
            where: { usuarioId: id },
        });
        res.json(productos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}