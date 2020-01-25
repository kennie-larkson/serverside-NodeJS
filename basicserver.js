// BASIC NODE SERVER

//REQUIRE THE NODE HTTP MODULE
const http = require('http');

//CREATE THE SERVER USING THE HTTP OBJECT
const server = http.createServer((req, res)=>{

    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200); // status code HTTP 200/OK

    //DATA TO BE SENT TO CLIENT/BROWSER
    const dataObj = {id:1111, name:"kennie", email:"kennie@my.org"}
    const data = JSON.stringify(dataObj);


    res.end(data);
});

//HAVE THE SERVER LISTEN TO CLIENT REQUESTS ON ANY AVAILABLE PORT ON THE COMPUTER
server.listen(1234,()=>{
    console.log('Server running on port: 1234');
});