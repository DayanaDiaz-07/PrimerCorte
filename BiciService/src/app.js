const express = require('express')
require('./db/mongoose')
const Bicicleta = require('./model/bicicleta')
const amqp = require('amqplib/callback_api');
const app = express()
const cors = require('cors');

amqp.connect(
    'amqps://hykgunvo:vaNZDA8nIOF-KXqSZ8NW68n_9oVfKWQs@beaver.rmq.cloudamqp.com/hykgunvo',
    (err, connection)=>{
        if(err){
            throw err
        }
        connection.createChannel((error,channel) =>{
            if(error){
                throw error
            }
            app.use(express.json())
            app.use(cors())

            channel.assertQueue('updateState', {durable: false})
            //updateState es el nombre del mensaje, aqui llega un tipo buffer
            //por eso se debe usar msg.content.toString()
            channel.consume('updateState', async (msg) =>{
                try{
                    const event = JSON.parse(msg.content.toString())
                    const bicicleta = await Bicicleta.findOne({_id:event.id})
                   
                    bicicleta['estado'] = event.estado;
                    await bicicleta.save()
                }catch(error){
                    channel.on( 'error', () => {
                        //do something
                        console.log('An error occurred');
                      });     

                }
            }, {noAck:true})

            
            app.post('/bicicleta',  async (req,res) =>{
                const bicicleta = new Bicicleta({
                    ...req.body,
                })
                try{
                    await bicicleta.save();
                    res.status(201).send(bicicleta)
                }catch(error){
                    res.status(400).send(error)
                }
            })

          
            app.get('/bicicleta/:id', async (req,res) =>{
                const _id = req.params.id
                try{
                    const bicicleta = await  Bicicleta.findOne({_id})
                    if(!bicicleta){
                        res.status(404).send()
                    }
                    res.status(200).send(bicicleta)
                }catch(error){
                    res.status(500).send(error)
                }
            })

            app.delete('/bicicleta/:id', async (req,res) =>{
                const _id = req.params.id
                try{
                    const bicicleta = await  Bicicleta.findOneAndDelete({_id})
                    if(!bicicleta){
                        res.status(404).send()
                    }
                    res.status(200).send(bicicleta)
                }catch(error){
                    res.status(401).send(error.message)
                }
                
            })

            app.post('/bicicleta',  async (req,res) =>{
                const bicicleta = new bicicleta({
                    ...req.body,
                })
                try{
                    await bicicleta.save()
                    res.status(201).send(bicicleta)
                }catch(error){
                    res.status(400).send(error)
                }
            })

            app.get('/bicicletas', async (req,res) =>{
                //siempre lo que nos llega por query es un string
                let match = "";
                if(req.query.estado){
                   match = req.query.estado;
                }
                try{
                    let bicicletas;
                    if(match){
                        bicicletas = await  Bicicleta.find({estado:match})
                    }else{
                        bicicletas = await  Bicicleta.find()
                    }
                    
                    res.status(200).send(bicicletas)
                }catch(error){
                    res.status(500).send(error)
                }
            })




            app.patch('/bicicleta/:id', async (req,res) => {
                const updates = Object.keys(req.body)
                const _id = req.params.id
                try{
                    const bicicleta = await  Bicicleta.findOne({_id})
                    if(!bicicleta){
                        res.status(404).send()
                    }
                    updates.forEach((update) => {
                        bicicleta[update] = req.body[update]
                    })
                    await bicicleta.save()
                    res.status(200).send(bicicleta)
                }catch(error){
                    res.status(500).send(error)
                }
            })

              
           

        })

})

module.exports = app

