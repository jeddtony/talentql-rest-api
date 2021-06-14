const app = require('./app');
const mongoose = require("mongoose");

// Connect to mongodb database
let MONGODB_URI = "";
if(process.env.NODE_ENV == "Production"){
 MONGODB_URI = `mongodb://${process.env.MONGO_USER}:${MONGO_PASSWORD}@localhost:27017/${process.env.MONGO_DATABASE}`;
} else{
    MONGODB_URI = `mongodb://localhost:27017/${process.env.MONGO_DATABASE}`;
}

const server = require('http').createServer(app);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false  })
  .then((result) => {
app.listen(process.env.PORT || 4000, function(err) {
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port ", 4000); 
});

  })
  .catch((err) => {
    console.log(err);
  });

// Restarting the server


// Implementing graceful shutdown
process.on('SIGINT', () => {
    console.info('SIGINT signal received.')
  
    // Stops the server from accepting new connections and finishes existing connections.
    server.close(function(err) {
      // if error, log and exit with error (1 code)
      if (err) {
        console.error(err)
        process.exit(1)
      }
  
      // close your database connection and exit with success (0 code)
      // for example with mongoose
     
    })
  })
