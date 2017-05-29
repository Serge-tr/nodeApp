const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '1234qwe';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     })
// });

let hashedPass = '$2a$10$54dre9eEOUZGpt413eG7u.qYBs4rXKWYmYP7NQ81/eJs4Br.Ha1kC';

bcrypt.compare(password, hashedPass, (err, res) => {
    console.log(res);
})

// var data = {
//     id: 10
// };

// let token = jwt.sign(data, '123qwe');
// console.log(token);

// let decoded = jwt.verify(token, '123fdqwe');
// console.log(decoded);