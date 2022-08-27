import app from "./app.js";

// Importamos sequelize para el manejo de la base de datos
import { sequelize } from "./database/database.js";

// async function checkConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log("Connection has been established successfully.");
//         app.listen(5000);
//         console.log("Servidor corriendo en puerto 5000");
//     } catch (error) {
//         console.error("Unable to connect to the database:", error);
//     }
// }

// checkConnection();

// Utilizaremos .sync para crear tablas en caso tal que no existan

// When we dont have any tables in the database we will use the sync method to create the tables, by using the 
// structure that we set up in our schemas, after creating the first one of each we can comment it out
// import './models/Usuario.js';
// import './models/Orden.js';
// import './models/Producto.js';

async function main() {
    await sequelize.sync({ force: true });
    app.listen(5000)
    console.log("Servidor corriendo en puerto 5000");
}

main();


// Vamos a probar nuestra conección a la base de datos
