exports.oneAdd = {
  name: "oneAdd",
  description: "I add a one",
  inputs: {
    required: ["type", "number"],
    optional: [],
  },
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    api.one.add(connection.params.type, connection.params.number, function(error){
      connection.error = error;
      next(connection, true);
    });
  }
};

exports.oneList = {
  name: "oneList",
  description: "I list all the ones",
  inputs: {
    required: [],
    optional: [],
  },
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    api.one.list(function(error, ones){
      connection.error = error;
      connection.response.ones = ones;
      next(connection, true);
    });
  }
};
