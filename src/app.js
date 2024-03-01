"use strict";
// class Department {
//     readonly name: string;
class Superhero {
    constructor() {
        this.characterDetails = {
            firstName: "",
            alterEgo: "",
            age: 0,
            specialty: "",
            race: "",
            relevence: false,
            heroes: [],
        };
    }
    character(firstName, alterEgo, age, specialty, race, relevance) {
        this.characterDetails.firstName = firstName;
        this.characterDetails.alterEgo = alterEgo;
        this.characterDetails.age = age;
        this.characterDetails.specialty = specialty;
        this.characterDetails.race = race;
        this.characterDetails.relevence = relevance;
        return this.characterDetails;
    }
    addSuperhero(heroes) {
        this.characterDetails.heroes.push();
        return this.characterDetails.heroes.length;
    }
    printSuperhero() {
        return this.characterDetails.heroes.length;
    }
}
const superHero = new Superhero().character('Tony Stark', 'Ironman', 45, 'engineering', 'human', true);
superHero.addSuperhero().character('Ant-Man');
console.log(superHero.heroes);
// 
