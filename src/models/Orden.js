import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Orden = sequelize.define(
    "ordenes", // Nombre de la tabla
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        estado: {
            type: DataTypes.STRING,
        },
        // fecha: {
        //     type: DataTypes.DATE,
        // }
    },
    {
        timestamps: true,
    }
)