// const fs=require ("fs");

import fs from "fs";

// fs.readFile("test.txt","utf-8", (error, data)=>{
//     if(error) throw error;
//     console.log(data);
// })
// const {square}=require("./utils.js");
// import {square} from"./utils.js";


import myFunction,{square} from "./utils.js";
const result=fs.readFileSync("../test.txt", "utf-8");
console.log(result);

console.log("Ram");
const name = "Shyam";
console.log(`hello ${name}`);

const faculty="BSc.CSIT";
console.log(`faculty is ${faculty}`);
const ressult=square(11);
console.log(ressult);
myFunction();