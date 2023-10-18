const express = require('express');
const app = express();
const port = 8080;
//servir un contenido estatico
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Home page');
});

app.get('/hola-mundo', function(req, res) {
    res.send('Hola mundo con su respectiva ruta');
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});

