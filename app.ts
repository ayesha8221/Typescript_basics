const person = {
    name: 'Ayesha',
    age: 24,
    hobbies: ['archery', 'horse-riding']
};

let favouriteActivities: any[];
favouriteActivities = ['horse-riding']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); //can add built-ins because type string
    // console.log(hobby.map()); will complain because a string type
}

console.log(person.name)