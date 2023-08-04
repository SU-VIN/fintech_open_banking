var fs = require("fs");

console.log("first func");
let textResult = "입력전";
fs.readFile("./test.txt", "utf-8", function (err, result) {
  if (err) {
    console.log(err);
    throw err;
  } else {
    textResult = result;
    console.log(result);
    console.error("두번째 기능인데 파일 읽어오느라 시간 걸림");
  }
  console.log(textResult);
  console.log("third func");
});
