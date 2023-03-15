/* To access web pages of any web application you need a web server. The web server will handle all the HTTP requests from the web application.
e.g. IIS is a web server for asp.net web applications and Apache is the web server for PHP for Java web applications. Node JS provides capabilities to create your own web server which will handle HTTP requests asynchronously. you can use IIS or Apache to the node JS web application but it is recommended to use a NodeJS web server.
 */
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res)=>{
    // data refresh only once...
    const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`,"utf-8");
    const objData = JSON.parse(data);

    if(req.url == "/"){
        res.end("Hello Pranav from the home side.");
    }
    else if(req.url == "/about"){
        res.end("Hello Pranav from the aboutUs side.");
    }
    else if(req.url == "/contact"){
        res.end("Hello Pranav from the contactUs side.");
    }
    else if(req.url == "/userapi"){
        // fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data)=>{
        //     res.end(data);
        // })
        res.writeHead(200, { "content-type" : "application/json" });
        res.end(objData[0].url);
    }
    else{
        res.writeHead(404, {"content-type": "text/html"});
        res.end("<h2> 404 error pages. Page not found :(</h2> ");
    }
});

server.listen(8000,"127.0.0.1", ()=>{
    console.log("Listening to the port number 8000");
});