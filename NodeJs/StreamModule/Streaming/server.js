const http = require("http");
const  fs = require("fs");


const server = http.createServer((req,res)=>{

    //Downloading big file in wrong way...
    // const file = fs.readFileSync("sample.txt");
    // return res.end(file);

    // const file = fs.readFileSync("Doctor_Strange.mvk");
    // res.writeHead(200, {"Content-Type":'video/mvk'})
    // return res.end(file);



    //Downloading big file in good way(Streams)
    // const readableStream = fs.createReadStream("sample.txt");
    // //readableStream --> writablestream
    // readableStream.pipe(res);


    // const readableStream = fs.createReadStream("Doctor_Strange.mvk");
    // //readableStream --> writablestream
    // res.writeHead(200, {"Content-Type":'video/mp4'})
    // readableStream.pipe(res);




    /*************************************************************** */
    //Copy big file bad way
    // const file = fs.readFileSync("sample.txt");
    // fs.writeFileSync("output.txt",file);


    //Copy big file good way
    const readStream = fs.createReadStream("sample.txt");
    const writeStream = fs.createWriteStream("output.txt");

    readStream.on("data",(chunk)=>{
        res.write(chunk);
        writeStream.write(chunk);
    });
    readStream.on("end", ()=>{
        res.end();
    });
    readStream.on("error", (err)=>{
        console.log(err);
        res.end("file not found");
    });


});

const PORT = process.env.PORT || 8000;
server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})