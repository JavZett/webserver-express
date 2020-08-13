const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//Middleware
app.use(express.static( __dirname + '/public'));

//Express HBS
hbs.registerPartials (__dirname + '/views/parciales');
app.set('view engine', 'hbs');


 
app.get('/', (req, res) => {
  //res.send('Hola Mundo');
  let salida = {
      nombre: 'Jav',
      edad: 16,
      url: req.url
  };

  res.render('home', {
      nombre: 'jav',
      year: new Date().getFullYear()
  });
});
app.get('/about', (req, res) => {
    res.render('about', {
        year: new Date().getFullYear()
    });
});
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el pueto ${ port }`);
});