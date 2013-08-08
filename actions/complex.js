exports.complexAdd = {
  name: "complexAdd",
  description: "I add a complex hash",
  inputs: {
    required: ["postdata"],
    optional: [],
  },
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    api.log("body", "debug", connection.params["postdata"]);
    api.complex.add(connection.params["postdata"], function(error){
      connection.error = error;
      next(connection, true);
    });
  }
};

exports.complexList = {
  name: "complexList",
  description: "I list all the complex",
  inputs: {
    required: [],
    optional: [],
  },
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    api.complex.list(function(error, objs){
      connection.error = error;
      connection.response.complex = objs;
      next(connection, true);
    });
  }
};
