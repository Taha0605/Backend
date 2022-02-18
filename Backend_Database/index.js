const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/product.js')

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

mongoose.connect('mongodb://localhost:27017/shopApp')
.then(()=>{
    console.log("Connection Established");
})
.catch(err =>{
    console.log("Connection FAILED");
    console.log(err);
})

// app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const port = 3000;

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('index', { products, category: 'All' })
    }
})

app.get('/products/new', (req, res) => {
    res.render('new', { categories })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products`);
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})



app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})













// app.listen(port, ()=>console.log(`On Port ${port}`));

// // app.get('/', (req, res)=>{
// //     console.log("Listening on Home...")
// //     res.render('index.html')
// // })

// app.get('/products', async (req, res) => {
//     const products = await Product.find({});
//     res.render('index.ejs', {products})
// })

// app.post('/products', async (req, res)=>{
//     const newProduct = req.body;
//     const p = new Product(newProduct)
//     await p.save()
//     res.redirect('/products')
// })

// app.get('/products/new', (req, res)=>{
//     res.render('new.ejs')
// })

// app.get('/products/:id', async (req, res)=>{
//     const {id} = req.params
//     const foundProduct = await Product.findById(id)
//     console.log(id)
//     res.render('show.ejs', {foundProduct})
// })

// app.get('/products/:id/edit', async (req, res)=>{
//     const {id} = req.params
//     const product = await Product.findById(id)
//     res.render('edit.ejs', {product})
// })

// app.put('products/:id', async (req, res)=>{
//     console.log(req.body)
//     res.send("YAYYY")
// })