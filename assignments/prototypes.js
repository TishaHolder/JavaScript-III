/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject (gameAttributes) {
  this.createdAt = gameAttributes.createdAt;
  this.name = gameAttributes.name;
  this.dimensions = gameAttributes.dimensions;  
}

GameObject.prototype.destroy = function() {
  console.log (`${this.name} was removed from the game.`);
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats (characterAttributes) {
  GameObject.call(this, characterAttributes);//sets CharacterStat's prototype to GameObject's prototype
  this.healthPoints = characterAttributes.healthPoints;  
}

//in order to ‘inherit’ the prototype methods from the GameObject's prototype 
CharacterStats.prototype = Object.create(GameObject.prototype);

//prototype method
CharacterStats.prototype.takeDamage = function () {
  console.log(`${this.name} took damage.`);
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid (humanoidAttributes) {
  //GameObject.call(this, humanoidAttributes);//sets Humanoid's prototype to GameObject's prototype
  CharacterStats.call(this, humanoidAttributes);//sets Humanoid's prototype to CharacterStat's prototype  
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;  
}

//in order to ‘inherit’ the prototype methods from the GameObject & CharacterStat prototypes
//Humanoid.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);

//prototype method
Humanoid.prototype.greet = function() {
  console.log(`${this.name} offers a greeting in ${this.language}`);
}

//==============================created for stretch task==========================
Humanoid.prototype.determineDestruction = function() {
  if(this.healthPoints <= 0)
  {
    this.destroy();
  }
  else {
    console.log (`Congratulations ${this.name}, you are still in the game!`)
  }
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  //==============Villain Constructor Function
  function Villain (villainAttributes) {
    Humanoid.call(this, villainAttributes);//sets Villains's prototype to Humanoid's prototype
  }

  //in order to ‘inherit’ the prototype methods from the Humanoid prototypes
  Villain.prototype = Object.create(Humanoid.prototype);

  //prototype methods - add/remove health points from villain objects
  Villain.prototype.doesEvil = function() {

    this.healthPoints -= 10;
      
  }

  Villain.prototype.evilThoughts = function() {

    this.healthPoints -= 10;
      
  }

  Villain.prototype.defeatsTheHero = function() {

    this.healthPoints += 20;
      
  }


  //==============Hero Constructor Function
  function Hero (heroAttributes) {
    Humanoid.call(this, heroAttributes);//sets Hero's prototype to Humanoid's prototype
    
  }

  //in order to ‘inherit’ the prototype methods from the Humanoid prototypes
  Hero.prototype = Object.create(Humanoid.prototype);

  //prototype method - add or remove points to non-villain objects 
  Hero.prototype.doesGood = function() {
    this.healthPoints += 10;
    
  }

  Hero.prototype.goodThoughts = function() {
    this.healthPoints += 10;
    
  }

  Hero.prototype.defeatsTheVillain = function() {
    this.healthPoints += 20;
    
  }

  //===================Hero & Villain Objects==========================
  const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Peter-Villain',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'English',
  });

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Pan-Hero',
    team: 'The Round Table',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Spanish',
  });


  console.log("************************STRETCH TASK*****************************************");

  //method battle
  villain.evilThoughts();
  console.log(`The villain is thinking evil thoughts......He now has ${villain.healthPoints} points`);

  hero.doesGood();
  console.log(`The hero did a good deed......He now has ${hero.healthPoints} points`);

  villain.doesEvil();
  console.log(`The villain did something evil......He now has ${villain.healthPoints} points`);

  hero.goodThoughts();
  console.log(`The hero is thinking good thoughts......He now has ${hero.healthPoints} points`);

  villain.doesEvil();
  console.log(`The villain did something evil......He now has ${villain.healthPoints} points`);

  hero.defeatsTheVillain();
  console.log(`The hero defeated the villain......He now has ${hero.healthPoints} points`);

  villain.defeatsTheHero();
  console.log(`The villain defeats the hero......He now has ${villain.healthPoints} points`);

  //determines who should get destroyed
  villain.determineDestruction();
  hero.determineDestruction();

 



  
  




