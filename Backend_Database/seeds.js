// this file is for adding some intial data to the empty database

const mongoose = require('mongoose')
const Product = require('./models/product.js')

mongoose.connect('mongodb://localhost:27017/shopApp')
.then(()=>{
    console.log("Connection Established");
})
.catch(err =>{
    console.log("Connection FAILED");
    console.log(err);
})

const p = new Product({
    name: 'Silicon Gun',
    price: 499.99,
    category: 'hardware'
})

p.save().then(p=>{
    console.log(p)
})
.catch(err =>{
    console.log("Error Occurred")
    console.log(err)
})
    