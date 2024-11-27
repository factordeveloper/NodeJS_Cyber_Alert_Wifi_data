document.getElementById('sendRequest').addEventListener('click', () => {
    const url = 'http://localhost:3000/api/alerts'; // Cambia 'localhost' por la IP de tu máquina si pruebas en un dispositivo físico.
    const data = {
        eventType: "new_ip_connection",
        timestamp: new Date().toISOString(),
        device: {
            deviceId: "123456789",
            deviceName: "Tablet Model XYZ",
            os: "Android 12"
        },
        connectionDetails: {
            ipAddress: "192.168.1.15",
            port: 443,
            networkType: "Wi-Fi",
            networkName: "MyHomeNetwork",
            connectionType: "TCP"
        }
    };

    // Realizar la solicitud POST
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('response').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('response').textContent = `Error: ${error.message}`;
        });
});
