// const bcrypt = require("bcrypt");

// const password = "JAYSHREERAM";

// const salt = 10;

// Acrinconous method

// bcrypt.hash(password, salt, (err, hash) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(hash);
//   }
// });

// const hashedPass = bcrypt.hashSync(password, salt);
// console.log(hashedPass);

// bcrypt.compare("JAYSHREERAM2", hashedPass, (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });

// const isMatched = bcrypt.compareSync("JAYSHREERAM2", hashedPass);
// console.log(isMatched);

const jwt = require("jsonwebtoken");

const secretkey = "Rider";

const userData = { name: "Rocky", age: 26, address: "Indore" };

const token = jwt.sign(userData, secretkey);

console.log(token);

const result = jwt.verify(token, secretkey);
console.log(result);
