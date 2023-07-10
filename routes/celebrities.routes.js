// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const router = require('express').Router(); 
const Celebrity = require('../models/Celebrity.model');
//const { request } = require("../app"); 
const celebrity = require ("../models/Celebrity.model"); 

// all your routes here
// create the get route: /celebrities/create and then render the celebrities/new-celebrity view
router.get("/celebrities/create", (request, response, next) => {
    console.log(request)
    response.render("celebrities/new-celebrity");
});

// here the post 
router.post("/celebrities/create", async (request, response, next) => {
    // get the data
console.log(request.body);
const data = request.body
try {
    const newCelebrity = await Celebrity.create(data)
    console.log(newCelebrity)
}); 

module.exports = router