const express = require('express'),
          app = express(),
          port = process.env.PORT || 3000,
          bodyParser = require('body-parser'), 
          mongoose = require('mongoose'), 
          Movie = require('./api/models/movie.js') 


//conexión a mongodb a través de mongoose
mongoose.connect('mongodb://localhost/todoMovieDb')
mongoose.Promise = global.Promise

//middleware para parsear la data de los request y utilizarla bajo request.body
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())

//incluímos las rutas
const routes  = require('./api/routes/movie')
routes(app)





//iniciar servidor
app.listen(port , () => {
    console.log(`RESTful API Movies listening on port: ${port} `)
})
          

