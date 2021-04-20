function changeElements() {
    const examples = document.querySelectorAll('.example');
    for (let i = 0; i < examples.length; i++) {
        examples[i].style.backgroundColor = 'red';
        examples[i].style.fontStyle = 'italic';
    }
}
//  document.querySelectorAll('.example').forEach( e => {
//     e.backgroundColor = 'red';
//     e.fontStyle = 'italic';
// });

export { changeElements };



const users = [
    {
        id: 1,
        name: 'Jack',
        email: 'j@gmail.com'
    },
    {
        id: 2,
        name: 'Joe',
        email: 'j@yacho.com'
    }
];

for(const user of users) {
    // user.email = (user.name + '@j.com').toLowerCase();
    // user.email = `${user.name}@${user.email.split('@').pop()}`.toLowerCase();
    user.email = `${user.name}@${user.email.split('@')[1]}`.toLowerCase();
}
console.log(users);