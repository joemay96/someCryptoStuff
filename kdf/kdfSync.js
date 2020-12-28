const crypto = require("crypto")
const { keyGen, genSalt } = require("../keyGenerator/generator");

const key = keyGen(128);

function kdf (key, salt){
  return crypto.scryptSync(key, salt, key.length, {cost: 16384*2, blocksize: 8, maxmem: 64 * 1024 * 1024});
}

function newKey(key) {
    return kdf(key,genSalt(1024)).toString("hex");
}

function generateNewKeys(key) {
    const secretKey = newKey(key);
    const privateKey = newKey(key);
    return { secretKey, privateKey }
}

module.exports = { generateNewKeys }


/*
For Testing:

console.log("key: ",key);
console.log("length: ",key.length);
let publicKey = newKey(key);
console.log("publicKey: ",publicKey);
console.log("length: ",publicKey.length)
let newSecretKey = newKey(key);
console.log("secretKey: ",newSecretKey);
console.log("length: ",newSecretKey.length)
*/
