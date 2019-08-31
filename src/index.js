const app = require('./config/env')


// start server on the specified port and binding host
app.listen(5050, function() {
  // print a message when the server starts listening
  console.log("server starting.. ");
});''