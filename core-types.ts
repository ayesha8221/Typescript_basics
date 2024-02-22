// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Ayesha',
//     age: 24,
//     hobbies: ['archery', 'horse-riding'],
//     role: [2, 'author']
// };

enum ROLE {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 'AUTHOR'
}

const person = {
    name: 'Ayesha',
    age: 24,
    hobbies: ['archery', 'horse-riding'],
    role: ROLE.ADMIN
};



person.role.push('admin');
// person.role[1] = 10  will complain because not the correct type

let favouriteActivities: any[];
favouriteActivities = ['horse-riding']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); //can add built-ins because type string
    // console.log(hobby.map()); will complain because a string type
}

console.log(person.name)