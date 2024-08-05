/*
GET
POST
UPDATE
DELETE
PATCH

http: Simple server creation
https: adds SSL
fs: file system module
path: access paths inside your server easily, absolute paths
os: Operating system module handling info OS

Request: Sent to the Servers
Response: Get back from the Server
*/
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000, () => {
    console.log(`Server started at port 3000`);
});

//localhost:3000
/*
package.json: 
1. Current project info
2. List of dependencies in our project
3. How we can start our project


*/