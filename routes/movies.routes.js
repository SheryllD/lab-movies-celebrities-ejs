const Movie = require("../models/movie.model");
const Celebrity = require("../models/celebrity.model");

const router = require("express").Router(); 

router.get("/", (request, response) => {
Movie.find()
.then((data) => {
    console.log(data)
    response.render("movies/movies, {data}")
})
})

//get new movie view/page
router.get("/create", (request, response, next) => {
    Celebrity.find()
    .then((data) => {
        response.render("movies/new-movie", {data})
    })
})

// POST new movie data
router.post("/create", (request, response, next) => {
Movie.create(request.body)
.then() => { 
    response.redirect("/movies")
})
error => {
    response.redirect("/create")
}
}); 

module.exports = router