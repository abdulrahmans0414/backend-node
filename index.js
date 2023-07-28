import http from "http"
import student from "./features.js";
import fs from "fs";
import express from "express";

const app = express();

const server = http.createServer(()=>{
    console.log('Servered');
});

//feature Page module
console.log(student);

// fs module import ke help se file read karten hain 
// const home =fs.readFile("./index.html",()=>{
//     console.log("Read file")
// })
// console.log("Home")

// ab isko likhenge asynchronously tarike se 
const home =fs.readFileSync("./index.html")
// console.log(home)

app.get('/', (req, res) =>{
    res.end(home)
})

server.listen(8080,()=>{
     console.log('Server is working');
});