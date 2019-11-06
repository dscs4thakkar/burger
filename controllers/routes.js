var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");


router.get("/", function(req,res){
burgers.selectAll(function(data){
   res.render("index", {burger:data}) 
})
});
//POST route to create/add a burger.
router.post("/api/:burger", function(req, res) {
  console.log(req.params.burger);
  
  burgers.insertOne(req.params.burger, function(result) {
    
      // Send back the ID of the new quote
      res.redirect("/");
    });
  });
  //POST route to update a burger.
router.put("/api/update/:id", function(req, res) {

  burgers.updateOne(req.params.id, function(result){
    res.sendStatus(200);
  });
});

module.exports = router;


