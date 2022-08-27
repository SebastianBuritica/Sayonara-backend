// Importaremos la libreria de Sequelize para el manejo de la base de datos
import Sequelize from 'sequelize';

// Vamos a establecer la conexión a la base de datos

export const sequelize = new Sequelize(
    'sayonara', // Nombre de la base de datos
     'postgres', // Nombre del usuario
      'T890pT8wKTTi', // Contraseña 
      {
    host: 'localhost', // Dirección del servidor
    dialect: 'postgres', // Tipo de base de datos
})