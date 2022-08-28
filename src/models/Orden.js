import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

// Vamos a importar nuestro modelo de Producto
import { Producto } from "./Producto.js";

// Vamos a importar nuestro modelo de Producto puesto que cada orden obtendra diferentes productos

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

// Asociamos el modelo de Producto a la tabla Orden
Orden.hasMany(Producto, {
    foreignKey: "ordenId",
    sourceKey: "id"
})

// Definimos la relacion con productos
Producto.belongsTo(Orden, { foreignKey: "ordenId", targetId: "id" });
