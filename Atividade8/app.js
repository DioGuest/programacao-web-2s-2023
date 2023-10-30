const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));



// Configurar o template engine para aceitar arquivos .html
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

const indexRouter = require('./routes/index');
const calculadoraRouter = require('./routes/calculadora');

app.use('/', indexRouter);
app.use('/calcular', calculadoraRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
