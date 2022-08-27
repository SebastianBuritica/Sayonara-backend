// Habilitar los tipos de datos en sequelize
import { DataTypes } from "sequelize";

// Vamos a importar sequelize
import { sequelize } from "../database/database.js";

// Vamos a importar nuestros modelos Orden y Producto para crear la relacion entre las tablas
import { Orden } from "./Orden.js";
import { Producto } from "./Producto.js";

// Vamos a crear nuestro schema de la tabla Usuario
export const Usuario = sequelize.define(
   "usuarios" ,
   {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
        },
        direccion: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING,
        },
   },

   // Vamos a definir fecha de creacion de cada elemento
   {
        timestamps: true, 
   }
)

// Vamos a definir la relacion entre las tablas
 Usuario.hasMany(Orden, {
    foreignKey: "usuarioId",
    sourceKey: "id"
 });

 // Definimos la relacion con ordenes
 Orden.belongsTo(Usuario, { foreignKey: "usuarioId", targetId: "id" });


 // Definimos la relacion con productos
 Usuario.hasMany(Producto, {
    foreignKey: "usuarioId",
    sourceKey: "id"
 })

 Producto.belongsTo(Usuario, { foreignKey: "usuarioId", targetId: "id" });