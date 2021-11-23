const express = require('express')
require('./db/mongoose')
const Reserva = require('./model/reserva')
const app = express()
const amqp = require('amqplib/callback_api');
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
            
            app.post('/reserva/:idBicicleta/:idUsuario',  async (req,res) =>{
                const reserva = new Reserva({
                    ...req.body,
                    idBicicleta: req.params.idBicicleta,
                    idUsuario: req.params.idUsuario
                })
                try{
                    await reserva.save();
                    channel.sendToQueue('updateState', Buffer.from(JSON.stringify({
                        id:req.params.idBicicleta,
                        estado:"reservado"
                    })))
                    res.status(201).send(reserva)
                }catch(error){
                    res.status(400).send(error)
                }
            })
            
            app.get('/reserva/:id', async (req,res) =>{
                const _id = req.params.id
                try{
                    const reserva = await  Reserva.findOne({_id})
                    if(!reserva){
                        res.status(404).send()
                    }
                    res.status(200).send(reserva)
                }catch(error){
                    res.status(500).send(error)
                }
            })
            
            app.get('/reservas',async (req,res) =>{
                try{
                    const reserva = await  Reserva.find()
                    if(!reserva){
                        res.status(404).send()
                    }
                    res.status(200).send(reserva)
                }catch(error){
                    res.status(500).send(error)
                }
            })
            
            app.delete('/reserva/:id', async (req,res) =>{
                const _id = req.params.id
                try{
                   
                    const reserva = await  Reserva.findOneAndDelete({_id})
                    if(!reserva){
                        res.status(404).send()
                    }
                    
                    channel.sendToQueue('updateState', Buffer.from(JSON.stringify({
                        id:reserva.idBicicleta,
                        estado:"disponible"
                    })))
                    res.status(200).send(reserva)
                }catch(error){
                    res.status(401).send(error.message)
                }
                
            })
            

            app.patch('/reserva/:id', async (req,res) => {
                const updates = Object.keys(req.body)
                const _id = req.params.id
                try{
                    const reserva = await  Reserva.findOne({_id})
                    if(!reserva){
                        res.status(404).send()
                    }
                    updates.forEach((update) => {
                        reserva[update] = req.body[update]
                    })
                    await reserva.save()
                    res.status(200).send(reserva)
                }catch(error){
                    res.status(500).send(error)
                }
            })
           
           
        })
})


module.exports = app



