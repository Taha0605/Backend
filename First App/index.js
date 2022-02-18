const express = require('express');
const app = express();

app.listen(8080, ()=>{
    console.log("Listening on port 8080...")
})

// app.use((req, res)=>{
//     console.log("Request being handled...")

//     res.send("Hello World")
// })

app.get('/', (req, res)=>{
    console.log("Requested successfully from the home page");
    res.send('<h1> Home </h1>')
})

app.get('/About', (req, res)=>{
    console.log("Successfully requested from the About page")
    res.send('<h1> About </h1>')
})

app.get('/Accounts', (req, res)=>{
    console.log("Successfully requested from the Accounts page")
    res.send('<h1> Accounts </h1>')
})

app.post('/Accounts', (req, res)=>{
    console.log("Successfully posted a request to the Accounts page")
    res.send('Posted a request to Accounts')
})

// app.get('/Products', (req, res)=>{
//     const {id} = req.params;
//     res.send(`You are looking at Product ID: ${id}`)
// })

app.get('/Products/:id', (req, res)=>{
    const {id} = req.params;
    // console.dir(req)
    res.send(`You are looking at Product ID: ${id}`)
})

app.get('/Products', (req, res)=>{
    const {q} = req.query;
    // console.dir(req)
    res.send(`You have searched for Product ID: ${q}`)
})

app.get('*', (req, res)=>{
    res.send('No such path found');
})