const express = require('express')
const app = express()
const chefs = require('./data/chefs.json');
const port = process.env.PORT || 5000;


app.get('/', (req, res) =>{
    res.send("My Server for Mexican Cuisine")
})

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})

app.get('/chefs/:id' , (req, res) =>{
    const id = req.params.id;
    const uniqueChef = chefs.find(n => n.id === id);
    res.send(uniqueChef)
})

app.listen(port, () =>{
    // console.log(`My Mexican server site.....${port}`)
})