const bcrypt = require('bcryptjs');

const users = [
    {
        name: "asif",
        email: "sijan826@gmail.com",
        pass:  bcrypt.hashSync('1234test', 10),
        role: "admin",       
    },
    {
        name: "sijan",
        email: "sijan826@gmail.com",
        pass:  bcrypt.hashSync('1234test', 10),
        role: "admin",       
    },
];
module.exports = users;