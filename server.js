
/* Como crear el servidor con express */

const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

const hbs = require('hbs');
require('./hbs/helpers');
 
app.use( express.static( __dirname + '/public'));

/* Express hbs engine */
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
  res.render( 'home', {
      nombre:'josé andres',
      anno: new Date().getFullYear()
  });
})

app.get('/about', function (req, res) {
    res.render( 'about', {
        anno: new Date().getFullYear()
    });
})

app.get('/contact', function (req, res) {
  res.render( 'contact', {
      anno: new Date().getFullYear()
  });
})
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})