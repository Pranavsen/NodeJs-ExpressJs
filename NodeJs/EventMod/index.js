// Event Module

// Node.js has a built-in module, called "Events",
// where you can create-, fire-, and listen for- your own events. 

// Example-1 Registering for the event to be fired only one time using once.
// Example-2 Create an event emitter instance and Register a couple of callbacks.
// Example-3 Registering for the event with callback parameters.


const EventEmmitter = require("events");
const event = new EventEmmitter();

/*
event.on("sayMyName", ()=>{
    console.log("your name is Pranav Sen");   //define event
})
event.emit("sayMyName");     //call event
*/

event.on("checkPage", (sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("checkPage", 200, "ok");


// The concept is quite simple: emitter objects emit named events that cause previously registered listeners to be called. So an emitter object basically has two main features:
// Emitting name events. registering and unregistering listener function.
