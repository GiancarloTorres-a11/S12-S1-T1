require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Root
app.get('/', (req, res) => {
  res.json({
    name: 'SENATI Store API',
    status: '🟢 Online',
    port: PORT,
    endpoints: {
      'POST /api/users/register': 'Crear usuario',
      'POST /api/users/login': 'Obtener JWT token',
      'GET /api/products': 'Lista productos (vacía OK)'
    }
  });
});

// Conexión MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    console.log(`🚀 http://localhost:${PORT}`);
    console.log('  POST /api/users/register');
    console.log('  POST /api/users/login');
    console.log('  GET /api/products');
    
    app.listen(PORT, () => {
      console.log(`✅ Servidor activo`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB error:', err.message);
  });

// 404
app.use((req, res) => {
  res.status(404).json({
    error: true,
    message: `Método ${req.method} ${req.path} no existe`,
    usa: 'POST register/login, GET products'
  });
});

// Errors
app.use((err, req, res) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

console.log('Iniciando servidor...');

