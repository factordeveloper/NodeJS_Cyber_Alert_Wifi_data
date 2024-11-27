// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const alertRoutes = require('./routes/alertRoutes');

const app = express();
const cors = require('cors');

// Habilitar CORS para todos los orígenes
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());


const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/', alertRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});