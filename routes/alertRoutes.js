// routes/alertRoutes.js
const express = require('express');
const router = express.Router();
const { createAlert, getAlerts } = require('../controllers/alertController');

// Endpoint para crear una nueva alerta
router.post('/api/alerts', createAlert);

// Endpoint para obtener todas las alertas
router.get('/api/alerts', getAlerts);

module.exports = router;
