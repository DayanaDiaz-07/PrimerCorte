const mongoose =  require('mongoose')
mongoose.connect('mongodb+srv://bicicletasUser:bicicletasUser@bicicletas-microservice.gglg1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
})


