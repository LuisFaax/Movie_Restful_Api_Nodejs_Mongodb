'use strict'

const mongoose = require('mongoose'),
      Movie = mongoose.model('Movies'),
      ObjectID = require('mongodb').ObjectID

//all movies
exports.all_movies = function(req, res){
    Movie.find({}, function(err, movie){
       if(err) return res.json({message: err})
       
    if(movie.length > 0){
        res.json({data: movie})
       }else{
           res.json({message: 'No existen películas'})
       }
    })
}

//create movie
exports.create_movie = function(req, res){
    var newMovie = new Movie(req.body)
    newMovie.save(function(err, movie){
            if(err) return res.json({message: err})
            
            res.json({data: movie})
    })
}

//find movie
exports.read_movie = function(req, res){
    if(!ObjectID.isValid(req.params.id)) return res.json({message: 'El ID proporsionado es inválido'})
    Movie.findById(req.params.id, function(err, movie){
        if(err) return res.json({message: err})
     
       if(movie){
        res.json({data: movie})
       }else{
           res.json({message: 'No existe la película'})
       }
        
    })
}

//update movie
exports.update_movie = function(req, res){
    Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, movie){
        if(err) return res.json({message: err})

        if(movie){
           res.json({data: movie})
         }else{
           res.json({message: 'Película no existe'})
         }
        
    })
}

//delete movie
exports.delete_movie = function(req, res){
    Movie.remove({_id: req.params.id
    }, function(err, movie){
          if(err) return res.json({message: err})
        
        if(movie.result.n=== 1){
           res.json({message: 'Película eliminada '})
         }else{
           res.json({message: 'Película no existe'})
         }

            
    })
}
