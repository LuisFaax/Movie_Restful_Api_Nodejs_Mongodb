'use strict'

module.exports = function(app){
    var todoMovie = require('../controllers/MovieController.js')

    //ruta default
    app.get('/', (req, res) =>{
            res.send('Welcome to RESTful API with NodeJS and Mongodb')
    })

    //ruta para obtener todas las peliculas y crear nueva
    app.route('/movies')
        .get(todoMovie.all_movies)
        .post(todoMovie.create_movie)

    //ruta para obtener una película, actualizar y eliminar
    app.route('/movies/:id')
        .get(todoMovie.read_movie)
        .put(todoMovie.update_movie)
        .delete(todoMovie.delete_movie)

    //en caso de rutas no definidas
    app.all('*', (req, res) =>{
            res.status(404).send({message: 'La ruta solicitada es inválida'})
    })

}