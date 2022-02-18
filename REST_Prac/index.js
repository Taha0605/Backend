const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(3000, ()=>{
    console.log("On Port 3000...")
})

app.get('/signup', (req, res)=>{
    const {username} = req.query
    res.send(`You have signed up as ${username}`)
})

app.post('/signup', (req, res)=>{
    console.log(req.body)
    const {username} = req.body
    res.send(`You have sent ${username} as your username`)
})