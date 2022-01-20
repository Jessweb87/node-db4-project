require('dotenv').config() // if we have the ENV file and we use this then we don't need 

const server = require('./api/server.js');

const PORT = process.env.PORT // || 5000; <-- THIS!!!

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
