// class Department {
//     readonly name: string;

//     constructor(n: string) {
//         this.name = n;
//     }

//     describe() {
//         console.log('Departments:' + this.name);
//     }
// }

// const accounting = new Department('Accounting');

// console.log();
//  accounting.name



type CharacterDetails = {
  firstName: string;
  alterEgo: string;
  age: number;
  specialty: string;
  race: string;
  relevence: boolean;
  heroes: string[] = [];
};

class Superhero {
  characterDetails: CharacterDetails = {
    firstName: "",
    alterEgo: "",
    age: 0,
    specialty: "",
    race: "",
    relevence: false,
    heroes: [],
  };

  character(firstName: string, alterEgo: string, age: number, specialty: string, race: string, relevance: boolean) 
  {
    this.characterDetails.firstName = firstName;
    this.characterDetails.alterEgo = alterEgo;
    this.characterDetails.age = age;
    this.characterDetails.specialty = specialty;
    this.characterDetails.race = race;
    this.characterDetails.relevence = relevance;
    return this.characterDetails;
  }

  addSuperhero(heroes: string) {
     this.characterDetails.heroes.push()
     return this.characterDetails.heroes.length
  }

  printSuperhero() {
    return this.characterDetails.heroes.length
  }


  
}

const superHero = new Superhero().character('Tony Stark', 'Ironman', 45, 'engineering', 'human', true)
superHero.addSuperhero().character('Ant-Man', )
console.log(superHero.heroes)



// 
