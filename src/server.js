const express = require('express');
const path = require('node:path');
const route = require('./routes');
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


app.use(route)

app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`));