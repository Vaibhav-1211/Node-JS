const fs = require('fs');

//how to read stuff from file
const textIn = fs.readFileSync("./txt/input.txt",'utf-8')
console.log(textIn)

//File creation || how to write to the file
const textOut = `ths is what avacado is about then give me hell yeah!: ${textIn}.\n Created on ${Date.now()} Time is ${Date.UTC()}`;
fs.writeFileSync('./txt/output.txt',textOut)
console.log("File Written");