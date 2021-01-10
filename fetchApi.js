import fetch from 'node-fetch';

const getRandomUsers = function () {

//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(json => {
//         console.log("First user in the array:");
//         console.log(json[0]);
//         console.log("Name of the first user in the array:");
//         console.log(json[0].name);
// })

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(fetchRandomUsers => fetchRandomUsers.json() ).then(randomUsers => {
            console.log(JSON.stringify(randomUsers.results.length));
            randomUsers.results.forEach(user => {
                const { name, username } = user;
                console.log(`${name} "----"  ${username}`)
            })
        })
        .catch(()=>console.log("ERROR is ON WAY"));

}

getRandomUsers();