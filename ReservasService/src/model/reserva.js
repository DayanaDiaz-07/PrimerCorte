const mongoose = require('mongoose')

//Idcicla, lat,long, idpersona, idreserva
const reservaSchema = new mongoose.Schema({
    idBicicleta:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //unique:true,
    },
    idUsuario: {
        type: String,
        required: true,
        trim:true
    },
    // long: {
    //     //Cross-Mountain bike, Ruta
    //     type:String,
    //     required: true,
    //     trim: true
    // },
    // lat: {
    //     type:String,
    //     required: true,
    //     trim: true
    // }
}, {
    timestamps: true
});

const Reserva = mongoose.model('Reserva', reservaSchema)

module.exports = Reserva