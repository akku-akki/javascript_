// import {coroutine as co} from 'bluebird';


import pkg from 'bluebird';
const { coroutine: co } = pkg;

import fetch from 'node-fetch';


// ONLY SYNTAX
// function* numbersGen(){
//     const response = yield Promise; 
// }

const getRandomUsers = co(function* (n) {
    const fetchUsers = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield fetchUsers.json();
    return data;
});

getRandomUsers().then(randomUsers => {
    randomUsers.forEach(user => {
        const { name, username } = user;
        console.log(`${name} "----"  ${username}`)
    });
}).catch(err => console.log(err))