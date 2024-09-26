const fs = require("fs");
var msg = "HELOOOOO";
/*fs.writeFile("message.txt", msg, (err) => {
    if (err) throw err;
    console.log("error");
});*/

fs.readFile("./message.txt","utf-8",(err,data) => {
    if (err) throw err;
    console.log(data);
})