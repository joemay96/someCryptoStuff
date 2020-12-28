const crypto = require("crypto")
const { keyGen, genSalt } = require("../keyGenerator/generator");

const key = keyGen(128);
const salt = genSalt(1024);

async function kdf (key, salt){
  return crypto.scrypt(key, salt, key.length, {cost: 16384*2, blocksize: 8, maxmem: 64 * 1024 * 1024}, (err, derivedKey) => {
    if (err) throw err;
      getNewKey(derivedKey);
    });
}

async function getNewKey(newKey) {
    //here you can work with the newKey
    console.log(newKey.toString("hex"));
    console.log(newKey.toString("hex").length);
}

console.log(key);
console.log(key.length);
kdf(key,salt);
