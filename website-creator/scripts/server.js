// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();  
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

const LogInSchema={
    name: String,
    mail: String
}

const credentials= mongoose.model("Credentials", LogInSchema)

app.get('/', function(req, res){
    res.sendFile(__dirname + '/website-creator/pages/login.html')
})

app.post('', function(req, res){
    let newCredentials= new credentials({
        name: req.body.name,
        mail: req.body.mail
    })
    newCredentials.save()
    res.redirect('/website-creator/pages/login.html')
})

mongoose.connect('mongodb+srv://loghindan494:NewPass2024!@twotek.bvnhes9.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

