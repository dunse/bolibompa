// initializers/one.js

exports.one = function(api, next){
  var redis = api.redis.client;
  api.one = {

    // constants
    oneHash: "one",

    // methods

    add: function(type, number, next){
      var self = this;
      redis.hget(self.oneHash, type, function(error, data){
        if(error != null){
          next(error);
        }else if(data != null){
          next("type already exists");
        }else{
            var data = {
              type: type,
              number: number,
              createdAt: new Date().getTime(),
            }
            redis.hset(self.oneHash, type, JSON.stringify(data), function(error){
              next(error);
            });
        }
      });
    },

    list: function(next){
      var self = this;
      redis.hgetall(self.oneHash, function(error, ones){
        var oneData = [];
        for(var i in ones){
          oneData.push( JSON.parse( ones[i] ) );
        }
        next(error, oneData);
      });
    }
  }
  next();
}
