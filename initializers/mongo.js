var mongoose = require('mongoose');

var mongo = function (api, next) {
  api.mongo = {};
  api.mongo.db = "bolibompa";
  api.mongo.options = {
    db: [api.mongo.db],
    user: api.configData.mongo.user,
    pass: api.configData.mongo.pass,
    server: { socketOptions: { keepAlive: 1 } },
    replset: { socketOptions: { keepAlive: 1 } }
  };
  if (api.configData.mongo.enable == true) {
    api.log("Enabling mongoDB connection", "debug");
    api.mongo.connection = mongoose.createConnection("mongodb://" + api.configData.mongo.host + ":" + api.configData.mongo.port, api.mongo.options);
    api.mongo.connection.on('connected', function() {
      console.log('MongoDB connected!');
      next();
    });
    api.mongo._teardown = function (api, next) {
      api.log("Releasing mongoDB connection", "debug");
      api.mongo.connection.close();
      next();
    }
  } else {
    api.log("Running without MongoDB", "notice");
    next();
  }
}

/////////////////////////////////////////////////////////////////////
// exports
exports.mongo = mongo;
