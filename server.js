const express = require('express');
const path = require('path');

const app = express();
// Usa un puerto completamente distinto a tu API (ejemplo: 8080 u 80)
const PORT = process.env.PORT || 8080;

// Servir archivos estáticos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// CUALQUIER petición HTTP que llegue a este servidor devolverá la pantalla de aviso
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚫 Servidor de aviso de suspensión corriendo en http://0.0.0.0:${PORT}`);
});