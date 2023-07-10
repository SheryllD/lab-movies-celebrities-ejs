// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const router = require('express').Router(); 
const { response } = require('../app');
const Celebrity = require('../models/celebrity.model');
//const { request } = require("../app"); 


// all your routes here

// create the get route: /celebrities/create and then render the celebrities/new-celebrity view
//router.get("/celebrities/create", (request, response, next) => {
//    console.log(request)
//    response.render("celebrities/new-celebrity");
//});

router.get("/", async (request, response, next) => {
    try{
        const allCelebrities = await Celebrity.find()
        response.render("celebrities/celebrities", {allCelebrities})
    } catch (err) {
        console.log(err)
    }
});  

//get new celebrity view/page
router.get("/create", (request, response, next) => {
    console.log(request)
    response.render("celebrities/new-celebrity")
})

// POST new celebrity data
router.post("/create", async (request, response, next) => {
console.log(request.body);
const data = request.body
try {
    //create new document with data
    const newCelebrity = await Celebrity.create(data)
    console.log(newCelebrity)
    //redirect to index page/view
    response.redirect("/celebrities/${newCelebrity._id}")
} catch(err) {
    console.log(err)
} 
}); 


module.exports = router