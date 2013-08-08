// initializers/fibonacci.js

exports.fibonacci = function(api, next){
  var redis = api.redis.client;
  api.fibonacci = {

    // constants

    // methods
    get: function(number, next){
      var self = this;
      var fib = [ 1, 2 ];
      calcFibonacci(fib, Math.floor(number),  function(val) {
        next(null, val);
      });
    }

  }
  next();
}

var calcFibonacci = function(fib, max, cb) {
  console.log(fib.length);
  if (fib.length > max) {
    cb(fib[fib.length-1]);
    return;
  }
  fib.push(fib[fib.length-2] + fib[fib.length-1]);
  setTimeout(calcFibonacci, 200, fib, max, cb);
}
