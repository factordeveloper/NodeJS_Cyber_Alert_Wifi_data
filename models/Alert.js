// models/Alert.js
const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    eventType: { type: String, required: true },
    timestamp: { type: Date, required: true },
    device: {
        deviceId: { type: String, required: true },
        deviceName: { type: String, required: true },
        os: { type: String, required: true }
    },
    connectionDetails: {
        ipAddress: { type: String },
        port: { type: Number },
        networkType: { type: String },
        networkName: { type: String },
        connectionType: { type: String }
    },
    wifiStatus: {
        connectedNetwork: {
            networkName: { type: String },
            bssid: { type: String },
            signalStrength: { type: Number },
            frequency: { type: Number },
            channel: { type: Number }
        },
        availableNetworks: [
            {
                networkName: { type: String },
                bssid: { type: String },
                signalStrength: { type: Number },
                frequency: { type: Number },
                channel: { type: Number }
            }
        ]
    }
});

module.exports = mongoose.model('Alert', alertSchema);
