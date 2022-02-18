const express = require('express');
const path = require('path');
const {v4: uuid} = require('uuid'); //this form of destructuring replaces the name v4 with uuid
const methodOverride = require('method-override'); //used to perform the PATCH and DELETE requests which override the GET request


const port = 3000;

const app = express();

app.use(express.static('public')) //used to imoprt script files and stylesheets into the server
app.use(express.urlencoded({extended: true})) // used to encode data parsing through in readable JS object format
// app.use(express.json)
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(port, ()=>console.log(`On Port ${port}`));

// let idCount=1;

let comments = [
    {
        // id: idCount.toString(),
        id: uuid(),
        username: "rosa",
        comment: "2b is best"
    },

    {
        id: uuid(),
        username: "saymyname",
        comment: "no chizuru is best"
    },

    {
        id: uuid(),
        username: "griff",
        comment: "no e-girls are best"
    },

    {
        id: uuid(),
        username: "MelonLord",
        comment: "3D girls supremacy"
    }
];

// idCount += comments.length;

app.get('/comments', (req, res)=>{
    res.render('index.ejs', {comments});
    console.log(comments);
})

app.get('/comments/new', (req,res)=>{ //to request for the page to create the new comment
    console.log("Listening on comments/new");
    res.render('new.ejs')
})

app.post('/comments', (req,res)=>{
    // console.log(req.body);
    const {username, comment} = req.body;
    // const id = idCount.toString();
    id = uuid()
    // idCount++;
    comments.push({id, username, comment});
    console.log(comments)
    res.redirect('/comments')
})

app.get('/comments/:id', (req,res)=>{
    const {id} = req.params;
    console.log(`Received request for id: ${id}`);

    const comment = comments.find(c => c.id === id)
    res.render('show.ejs', {comment})
})

//Editing or Updating a resource
app.get('/comments/:id/edit', (req, res)=>{
    const {id} = req.params;
    const comment = comments.find(c=> c.id === id);
    res.render('edit.ejs', {comment});
})

app.patch('/comments/:id', (req, res)=>{
    const {id} = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
})

//Deleting a resource
app.delete('/comments/:id', (req, res)=>{
    const {id} = req.params;
    comments = comments.filter(c=> c.id!==id)
    res.redirect('/comments')
})
