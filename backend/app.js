const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('./routes/user');
const saucesRoutes = require('./routes/sauces')
const path = require("path")
require ("dotenv").config()


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(express.json())

mongoose.connect(process.env.pass,
{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));
 
app.use(express.json());
app.use('/api/auth', userRoutes);
app.use ('/api/sauces', saucesRoutes)
app.use('/images', express.static(path.join(__dirname,"images")))

module.exports = app;