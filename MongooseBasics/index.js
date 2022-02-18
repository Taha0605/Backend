const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/movieApp')
.then(()=>{
    console.log("Connection Established");
})

.catch(err =>{
    console.log("Connection FAILED");
    console.log(err);
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)

const ncfom = new Movie({
    title: "No Country for Old Men",
    year: 2007,
    score: 8.7,
    rating: "Excellent"
});

Movie.insertMany([
    {
        title: "No Country for Old Men",
        year: 2007,
        score: 8.7,
        rating: "Excellent"
    },
    {
        title: "Social Network",
        year: 2009,
        score: 9,
        rating: "Excellent"
    },
    {
        title: "The Room",
        year: 2001,
        score: 5.4,
        rating: "Poor"
    },
    {
        title: "You Before Me",
        year: 2016,
        score: 6.8,
        rating: "Below Average"
    }
])
.then((data)=>{
    console.log("Successfully Added");
    console.log(data);
})
.catch((err)=>{
    console.log("Operation FAILED");
    console.log(err);
})