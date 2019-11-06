var orm = require("../config/orm.js");

var burgers = {
    selectAll : function(cb){
        orm.selectAll( function(res){
            cb(res);

        })
    },
     insertOne : function(vals, cb){
         console.log(vals);
         
        orm.insertOne(vals, function(res){
            cb(res);
        });
    },
     updateOne : function(id, cb){
        orm.updateOne(id,function(res){
            cb(res);
		});
	},
};
module.exports = burgers;