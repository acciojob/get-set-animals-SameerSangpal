// Define Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Define Cat class
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Define Dog class
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Expose classes to the global window object for Cypress
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
