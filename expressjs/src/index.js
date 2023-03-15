const path = require("path");
const express = require("express");
const app = express();


const staticPath = path.join(__dirname, "../public");

// builtin middleware
app.use(express.static(staticPath));

// API
// get - read
// post - create 
// put - update 
// delete - delete 

app.get("/",(req,res)=>{
    // res.send("Hello world from the EXPRESS");

    // we use "write" to print multiple data 
    res.write("<h1>Hello world from the EXPRESS</h1>");
    res.write(" <h1>This is Pranav Sen</h1>");
    res.send();

});
app.get("/about",(req,res)=>{
    res.status(200).send("Hello world from the About Page");
});
app.get("/contact",(req,res)=>{
    res.send("Hello world from the Contact Page");
});
// app.get("/temp",(req,res)=>{
//     res.send([
//     {
//         id:1,
//         name:"Pranav Sen",
//     },
//     {
//         id:2,
//         name:"Chayan Sen",
//     },
//     {
//         id:3,
//         name:"Deepak Sen",
//     },
// ]);
// });

app.get("/temp",(req,res)=>{
    res.json([
    {
        id:1,
        name:"Pranav Sen",
    },
    {
        id:2,
        name:"Chayan Sen",
    },
    {
        id:3,
        name:"Deepak Sen",
    },
]);
});


app.listen(8000,()=>{
    console.log("listening the port at 8000");
});



// The methods are identical when an object or array is passed but res.json() will also 
// will also convert non object such as null and undefined, which are not valid JSON.
// res.json() method.It convert an object and converts it into JSON before sending it as a response.