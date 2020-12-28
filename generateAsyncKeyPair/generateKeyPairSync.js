const crypto = require("crypto");
const fs = require("fs");
const { keyGen, genSalt } = require("../keyGenerator/generator");
const { generateNewKeys } = require("../kdf/kdfSync");

function generateKeyPair(key) {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: key
    }
  });
  return { publicKey, privateKey }
}

function saveKey(path, key) {
  fs.writeFileSync(path, key);
}

function genKeys(key){
  const keypair = generateKeyPair(key);
  saveKey("./keys/pat", keypair.publicKey);
  saveKey("./keys/pat.pub", keypair.privateKey);
}

/*
for testing
*/
//genKeys(keyGen());
