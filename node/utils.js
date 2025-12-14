function square(value){
    return value * value;
}
function greet(){
    console.log("Hello im the function from utils.js");
}

// module.exports={square};

export {square};
export default greet;