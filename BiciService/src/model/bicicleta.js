const mongoose = require('mongoose')

const bicicletaSchema = new mongoose.Schema({
    marca:{
        type: String,
        required: true,
        trim: true
    },
    tipoBicicleta: {
        //Cross-Mountain bike, Ruta
        type:String,
        required: true,
        trim: true
    },
    //disponible-reservado
    estado: {
        type:String,
        default: 'disponible',
        trim:true,
        lowecase:true,
    },
    color: {
        type:String,
        required: true,
        trim: true
    },
    long: {
        //Cross-Mountain bike, Ruta
        type:String,
        required: true,
        trim: true
    },
    lat: {
        type:String,
        required: true,
        trim: true
    }


});

const Bicicleta = mongoose.model('Bicicleta', bicicletaSchema)

module.exports = Bicicleta