'use strict'

const  mongoose = require('mongoose')

const Schema = mongoose.Schema

//esquema del modelo Novie
var MovieSchema = new Schema({
    title:{
        type: String,
        required: 'Proporciona el título de la película'
    },
    year:{
        type:Number,
        required:'Falta el año'
    },
    category:{
        type:String,
        required: 'La categoria es requerida'
    },
    director:{
        type:String,
        required:'El nombre del director es obligatorio'
    },
    storyline:{
        type:String
    },
    created_at:{
         type: Date, default: Date.now 
    }

})


module.exports = mongoose.model('Movies', MovieSchema)

