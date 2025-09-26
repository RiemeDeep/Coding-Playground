const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Michael! 👋 Dein Express-Server läuft.");
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hallo ${name}, willkommen bei Express!`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});