
const fs = require("fs");
fs.writeFile("read.txt", "Today is awesome day :)", (err)=>{
    console.log("File is created");
});

// we pass them a function as an argument -a callback function-
// that gets caled when that task completes.
// The callback has an argument that tells you whether
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile has completed and 
// start checking for error.

fs.appendFile("read.txt", " Please like and subscribe.", (err)=>{
    console.log("File append successfully");
})

fs.readFile("read.txt", "UTF-8", (err,data)=>{
    console.log(data);
});