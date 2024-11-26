// controllers/alertController.js
const Alert = require('../models/Alert');

// Crear nueva alerta
const createAlert = async (req, res) => {
    try {
        const newAlert = new Alert(req.body);
        await newAlert.save();
        res.status(201).json({ message: 'Alert created successfully', alert: newAlert });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las alertas
const getAlerts = async (req, res) => {
    try {
        const alerts = await Alert.find();
        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createAlert,
    getAlerts
};
