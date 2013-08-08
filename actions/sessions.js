exports.action = {
  name: "getSession",
  description: "I get a session",
  inputs: {
    required: [],
    optional: [],
  },
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    console.log(connection.id);
    connection.response.sessionId = connection.id;
    next(connection, true);
  }
};

