// initializers/complex.js
var ce = require("cloneextend");

exports.complex = function(api, next){
  var redis = api.redis.client;
  api.complex = {

    // constants
    myHash: "complex",

    // methods

    add: function(obj, next){
      var self = this;
      api.log("obj", "info", obj, {});
      var keys = Object.keys(obj);
      var key = keys[0];
      redis.hget(self.myHash, key, function(error, data){
        if(error != null){
          next(error);
        }else if(data != null){
          next("key already exists");
        }else{
          var data = obj;
          data[key].createdAt = new Date().getTime();
//            var data = ce.extend(obj, {
//              createdAt: new Date().getTime(),
//            });
            api.log("data", "debug", data, {});
            redis.hmset(self.myHash, data, function(error){
              next(error);
            });
        }
      });
    },

    list: function(next){
      var self = this;
      redis.hgetall(self.myHash, function(error, objs){
        var objData = [];
        for(var i in objs){
          //objData.push( JSON.parse( objs[i] ) );
          objData.push( objs[i] );
        }
        next(error, objData);
      });
    }
  }
  next();
}
