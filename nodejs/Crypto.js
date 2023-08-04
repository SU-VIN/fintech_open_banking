let crypto = require("crypto");

const secret = "abcdefg";
const secret2 = "abcdef";
const hash = crypto
  .createHmac("sha256", secret)
  .update("비밀번호1234")
  .digest("hex");

const hash2 = crypto
  .createHmac("sha256", secret2)
  .update("비밀번호1234")
  .digest("hex");

console.log(hash === hash2);

const AESEncrypt = (plainTxt) => {
  const algorithm = "aes-256-cbc";
  const key = "tDAArT4tgoJra4AVYYUgt9Nvb9aImrTm";
  const iv = "oNYgvfAAoAUb9mmD";
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(plainTxt, "utf8", "base64");
  encrypted += cipher.final("base64");
  console.log(encrypted);
};

const encrypt = "BHH3zWvc/D+AuxB1jGOZ8doMqLEcNk1KKUjYLZnZeHU=";

const AESDecrypt = (encrypt) => {
  const algorithm = "aes-256-cbc";
  const key = "tDAArT4tgoJra4AVYYUgt9Nvb9aImrTm";
  const iv = "oNYgvfAAoAUb9mmD";
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypt, "base64", "utf8");
  decrypted += decipher.final("utf8");

  console.log(decrypted);
};
AESDecrypt(encrypt);
const mypwd = "Dlaqkcl430!";
AESEncrypt(mypwd);
// AESEncrypt("");
// AESDecrypt("");
