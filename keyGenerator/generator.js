const crypto = require("crypto")
const { allChars } = require("./CHARACTERS");

function randomBytes(length) {
  //sync
  return crypto.randomBytes(length);
}

function randomBytesAsync(length) {
  crypto.randomBytes(bytes, (err, buf) => {
    if(err) throw err;
    console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
  })
}

function randomInt(min=0, max) {
  return crypto.randomInt(min, max);
}

//function to generate a random key of a random length
function keyGen(length) {
  let key = '';
  for (let i = 0; i < length; i++) {
    key += allChars[(randomInt(0,allChars.length))];
  }
  return key;
}

//function to generate a random salt in a specified length
function genSalt(length) {
  return randomBytes(length);
}

module.exports = { keyGen, genSalt }
