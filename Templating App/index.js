const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')))

app.listen(8080, ()=>{
    console.log("Listening on port 8080");
})

app.get('/', (req,res)=>{
    // res.send("HOME")
    let num = Math.floor(Math.random()* 10) + 1;
    res.render('home.ejs', {rand: num})
})