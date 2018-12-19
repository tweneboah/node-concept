//Module 1: fs

const fs = require("fs"); //We only pass one string thus module name

fs.appendFile("greetings.txt", "Hello Node js")


//Module 2: os()
//It return the current os name

const os = require("os");

let user = os.userInfo();
console.log(user.username);