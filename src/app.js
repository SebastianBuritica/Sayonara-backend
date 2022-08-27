import express from 'express';

const app = express();

// Las rutas
// import clientRoutes from './routes/client.routes.js';
// import orderRoutes from './routes/order.routes.js';
// import productRoutes from './routes/product.routes.js';

// Para manipular la data en formato JSON
app.use(express.json());

// Definir las rutas
// app.use('/api/clients', clientRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/products', productRoutes);

export default app;