import express from 'express'
import mongoose from 'mongoose'
import cards from './dbcards.js'
import cors from 'cors'


//Appconfig
const app=express();
const port=process.env.PORT || 3000;
const connectionurl='mongodb+srv://chrismysk:EWf3vJshFKxWYSy1@cluster0.pay0l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//middlewares
app.use(express.json());
app.use(cors())
//db config
mongoose.connect(connectionurl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})
//Api end points
app.get('/',(req,res)=>{res.status(200).send("hello")});

app.post('/tinder/cards',(req,res)=>{
    const dbcards=req.body;
    cards.create(dbcards,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards',(req,res)=>{
    const dbcards=req.body;
    cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});

//listener
app.listen(port,()=>console.log(`listening on local host at port ${port}`));
