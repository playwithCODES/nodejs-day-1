import fs from "fs";
//readfile
const result=fs.readFileSync("data/data.txt","utf8");
console.log(result);

const imageresult=fs.readFileSync("data/image.jpg", "base64");
console.log(imageresult);


//writefile
fs.writeFileSync("data/data.txt","Jaldi Waha se hato");
fs.writeFileSync("data/image.txt",imageresult);


//appendfile
fs.appendFileSync("data/data.txt","This is a new new append file");

//Delete: rm
fs.unlinkSync("data/image.jpg");
fs.rmSync("data/image.txt");

fs.rmSync("test",{ recursive: true });
 
//This is for async read file
fs.readFile("data/data.txt", "utf-8", (error,data)=>{
if(error)throw error;
console.log(data);
})
console.log("Ram");

fs.writeFile("data/data.txt", "This is the newly added text file words", ()=>{
    console.log("Data written successfully");
})