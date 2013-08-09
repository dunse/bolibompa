var action = {};

/////////////////////////////////////////////////////////////////////
// metadata
action.name = "routes";
action.description = "I will return all routes information the API";
action.inputs = {
  "required" : [],
  "optional" : []
};
action.blockedConnectionTypes = [];
action.outputExample = {
  post: [{}]
}

/////////////////////////////////////////////////////////////////////
// functional
action.run = function(api, connection, next){
  connection.response.routes = [];
  Object.keys(api.routes.routes).forEach(function(method) {
    api.routes.routes[method].forEach(function(route) {
      connection.response.routes.push({path: route.path, action: route.action, method: method});
    });
  });
  next(connection, true);
};

/////////////////////////////////////////////////////////////////////
// exports
exports.action = action;
