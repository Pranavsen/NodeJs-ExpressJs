const fs = require("fs");
const http = require("http");
const {Transform, pipeline} = require("stream");

// const replaceWordProcessing = require('./replaceWordProcessing')
// const uppercaseWordProcessing = require('./uppercaseWordProcessing')

const server = http.createServer((req,res)=>{

    const sampleFileStream = fs.createReadStream('sample.txt');
    const outputWritableStream = fs.createWriteStream("output2.txt");
    
    // sampleFileStream.on('data',(chunk)=>{
        
    //     const upperCaseData = chunk.toString().toUpperCase();
    //     const finalString = upperCaseData.replaceAll(/ipsum/gi,"Cool");
    //     outputWritableStream.write(finalString);
    // })

    const uppercaseWordProcessing = new Transform({
        // transform(chunk,encoding,callback)
        transform(chunk,encoding,callback){
            callback(null, chunk.toString().toUpperCase())
        }
    })

    const replaceWordProcessing = new Transform({
        transform(chunk,encoding,callback){    
            // replaceWordProcessing.emit('error',new Error('something here....'))
        const finalString = chunk.toString().replaceAll(/ipsum/gi,"Cool");
        callback(null, finalString);
        }
    })


    // sampleFileStream.pipe(replaceWordProcessing).pipe(uppercaseWordProcessing).pipe(outputWritableStream);
    // if any error occure during pipe we use pipeline method 
    pipeline(
        sampleFileStream,
        replaceWordProcessing,
        uppercaseWordProcessing,
        outputWritableStream,
        (err) =>{
            if(err){
                console.log("Error handling here...", err);
            };
        }
    )

    res.end();
})

const PORT = process.env.PORT || 8000;
server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})