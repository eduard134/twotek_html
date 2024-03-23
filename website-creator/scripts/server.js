// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();  
const bodyParser=require('body-parser')
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))

const LogInSchema={
    name: fullName,
    mail: email
}

const credentials= mongoose.model("Credentials", LogInSchema)

app.get('/', function(req, res){
    res.sendFile(__dirname + '/login.html')
})

app.post('/', function(req, res){
    let newCredentials= new Credential({
        name: req.body.name,
        mail: req.body.mail
    })
    newCredentials.save()
    res.redirect('/')
})

app.listen(3000, function(){
    console.log("server is running on 3000")
})

mongoose.connect('mongodb+srv://loghindan494:NewPass2024!@twotek.bvnhes9.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

