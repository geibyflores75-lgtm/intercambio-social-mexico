const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.all('*', (req, res) => {
  res.send(`¡Hola Brahian! El servidor está funcionando y ha recibido una petición a: ${req.url} 🚀🛡️`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});