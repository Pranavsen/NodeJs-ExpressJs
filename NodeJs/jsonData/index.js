const fs = require("fs");

const bioData = {
    name : "Pranav Sen",
    age : 22,
    college : "VIT Bhopal"
};
/*
console.log(bioData);

const jsonData = JSON.stringify(bioData);
console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);
*/


// *******Challenge*********
// 1: convert to JSON
// 2: store data in another file
// 3: readFile
// 4: again convert it into original data
// 5: print



const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err)=>{
//     console.log("Store successfully");
// });

fs.readFile("json1.json", "utf-8", (err,data)=>{
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})



// JSON stands for Javascript Object Notation. JSON is a lightweight
// format for storing and transporting data.
// JSON is ofter used when data is sent from a serve to a web page