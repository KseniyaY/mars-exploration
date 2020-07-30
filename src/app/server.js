// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
    presets: ["@babel/preset-env"]
});

const path = require('path');
const express = require('express');
const layout = require('express-layout');
const router = require('./routes');


const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const middlewares = [
    layout(),
    express.static(path.join(__dirname, '../assets'))
]
app.use(middlewares);

app.use('/', router);

app.listen(3000, () => {
    console.log(`App running at http://localhost:3000`)
})