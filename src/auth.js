const crypto = require('crypto');


// RNF1: PBKDF2 + salt
const hashPassword = (password) => {
const salt = crypto.randomBytes(16).toString('hex');
const derived = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha256').toString('hex');
return `${salt}:${derived}`;
};


const verifyPassword = (password, stored) => {
const [salt, derivedHex] = stored.split(':');
const derivedCheck = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha256').toString('hex');
return derivedCheck === derivedHex;
};


module.exports = { hashPassword, verifyPassword };