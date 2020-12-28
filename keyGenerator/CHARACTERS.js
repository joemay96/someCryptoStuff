const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const special = '`~!@#$%^&*()-=_+[]{}|;:,.<>?';
const allChars = lowerCase+upperCase+numbers+special;

module.exports = { lowerCase, upperCase, numbers, special, allChars }
