const express = require("express")
const router = express.Router(); 

/* GET home page */
router.get("/", (request, response, next) => {
  response.render("movie");
});

module.exports = router;

router.get("/", async (request, response, next) => {
  try{
      const allCelebrities = await Celebrity.find()
      response.render("celebrities/celebrities", {allCelebrities})
  } catch (err) {
      console.log(err)
  }
});  