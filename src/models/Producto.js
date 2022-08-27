// Repetimos el proceso realizado en Usuario.js

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Producto = sequelize.define(
    "productos", // Nombre de la tabla
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        precio: {
            type: DataTypes.INTEGER,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
    }
)

