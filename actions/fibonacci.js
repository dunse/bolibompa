var action = {};
action.name = "getFibonacci";
action.description = "I get all the ones";
action.inputs = {
  required: ["id", "number"],
  optional: [],
};
action.outputExample = {};
action.version = 1.0;


action.run = function(api, connection, next){
  api.fibonacci.get(connection.params.number, function(error, result){
    api.log('publishing: ' + result, "debug");
    api.faye.client.publish('/client/websocket/connection/' + connection.params.id, {context: "user", type: "fibonacci", value: result});
//    connection.response.fibonnaci = result;
  });
  next(connection, true);
};


exports.action = action;
