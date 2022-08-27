import express from 'express';

const app = express();

// Las rutas
import usuariosRoutes from './routes/usuarios.routes.js';
import ordenesRoutes from './routes/ordenes.routes.js';
import productosRoutes from './routes/productos.routes.js';

// Para manipular la data en formato JSON
app.use(express.json());

// Definir las rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/ordenes', ordenesRoutes);
app.use('/api/productos', productosRoutes);

export default app;