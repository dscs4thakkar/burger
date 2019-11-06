var connection = require("../config/connection.js");

//orm is a js variable and its going to represent objective functions that speak to out database

var orm = {
selectAll: function(cb){
    var queryUrl = "SELECT * FROM burgers";
    connection.query(queryUrl, function(err, res){
        if (err) throw err;
        cb(res);
    })
},
insertOne: function(bName, cb){
	console.log(bName);
	
	var queryUrl = "INSERT INTO burgers (burger_name, devoured) VALUES ('"+ bName+"', false)"
	connection.query(queryUrl,function(err, results){
		if(err){
			throw err;
		}
		cb(results);
	});
},
updateOne: function(id, cb){
	var queryUrl = "UPDATE burgers SET devoured=true WHERE id='" +id + "';";
	

	console.log(queryUrl);
	connection.query(queryUrl, function(err, results){
		if(err){
			throw err;
		}
		cb(results);
	});
 },
};

module.exports = orm;