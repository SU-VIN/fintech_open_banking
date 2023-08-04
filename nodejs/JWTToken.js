let jwt = require("jsonwebtoken");
let privateKey = "dkfkjaewlsdklfjsajkldf";
var tokenKey = "f@i#n%tne#ckfhlafkd0102test!@#%";
jwt.sign(
  {
    userId: 1,
    userEmail: "dlatnqls225",
  },
  tokenKey,
  {
    expiresIn: "10d",
    issuer: "fintech.admin",
    subject: "user.login.info",
  },
  function (err, token) {
    console.log("로그인 성공", token);
    res.json(token);
  }
);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6ImRsYXRucWxzMjI1IiwiaWF0IjoxNjkxMTE3MDc1LCJleHAiOjE2OTE5ODEwNzUsImlzcyI6ImZpbnRlY2guYWRtaW4iLCJzdWIiOiJ1c2VyLmxvZ2luLmluZm8ifQ.w6V1wkw_W4Fs6X-Y5BR0RkI3nlRr2QWCgT1erkb_C1I";
jwt.verify(token, tokenKey, function (err, decoded) {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log(decoded);
  }
});
