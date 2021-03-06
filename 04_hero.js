/**
 * It's time to create a hero to dispatch these pesky monsters.
 *
 * Copy your code from the previous exercise.
 *
 * Add a SETTER method to your LivingThing class named "setHealth" that lets you update the value
 * of the "health" property.
 *
 * Now, create a NEW object called "Hero" that EXTENDS the LivingThing class.
 *
 * NOTE: Check out the following to figure out how to extend an object
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 *
 * Add a method to the Hero class named "attack" that takes as a parameter a LivingThing object.
 * The method should do three things:
 * 1. Reduce the LivingThing object's health by a random value between 0 and 10.
 * 2. Reduce the hero's health by a random value between 0 and 10.
 * 3. Print out how much damage the monster and hero did to each other.
 *
 * NOTE: To point you in the right direction: check out
 * the getRandomInt function on this page:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 *
 * Give the Hero object another method named "fight" that takes as a parameter an array of LivingThing objects
 * and does the following:
 *  - For each LivingThing object in the array, call the "attack" method so the hero can attack the monster.
 *     - But, don't attack if the LivingThing is already dead!
 *  - Repeat the process until all the monsters or the hero is dead.
 *
 * Finally, you will need to instantiate your hero object with the name into a variable named "hero". Give them 100 health and a
 * name of your choice.
 */


 (function(){
    //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    'use strict';

    ///////////////////////////
    // Put your code here!
    ///////////////////////////

    function getRandomInt(min, max) { //this just ensures we get a whole number - taken from MDN documentation.
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

    function livingThing(monsterName, monsterHealth) {
      let name = monsterName;
      let health = monsterHealth;

      this.isAlive = function(){
        return health > 0
      }

      this.getName = function(){
        return name;
      }

      this.getHealth = function(){ //no parameter because you don't need anything to make a decision. Just return the health #.
        return health;
      }
      this.setHealth = function(newHealth){ //need a parameter here to set the new value to.
        health = newHealth;
      }
      }

      function Hero(heroName, heroHealth){ //this is the hero class
        livingThing.call(this, heroName, heroHealth) //using the same values as monsterName and monsterHealth // "call" is what extends it.


        this.attack = function(monster){ // we are now naming it Monster. You could call it "placeholder", because you'll pass in another value later. Could be equivalent to "let whatever I receive be called 'monster'"
        //random number between 0 and 10 and the damage taken in the attack
          let heroDamage = getRandomIntInclusive(0, 10);
          let monsterDamage = getRandomIntInclusive(0, 10);
          //decrease he health of the living thing with the random number generator
          monster.setHealth(monster.getHealth() - monsterDamage);
          //decrease the health of the hero (this) with the randon number generator
          this.setHealth(this.getHealth() - heroDamage);

          //console.log("The hero took " + heroDamage + "damage");
          //console.log("The monster took " + monsterDamage + "damage");

          //OR

          console.log(this.getName() + " took " + heroDamage + "damage");
          console.log(monster.getName() + " took " + monsterDamage + "damage");
      }

      /*  Give the Hero object another method named "fight" that takes as a parameter an array of LivingThing objects
        * and does the following:
        *  - For each LivingThing object in the array, call the "attack" method so the hero can attack the monster.
        *     - But, don't attack if the LivingThing is already dead!
        *  - Repeat the process until all the monsters or the hero is dead.*/

        this.fight = function(arrayOfMonsters){ //arrayOfMonsters can be called placeholder, because we are going to call in another value later to go in here.
          for(let i=0; i< arrayOfMonsters.length; i++){ //how many it iterates
          while (arrayOfMonsters[i].isAlive() && this.isAlive()){ //condition
            this.attack(arrayOfMonsters[i]);
            if(!this.isAlive() == false){break;}
          }
          }
        }
      }
}
      let Hero1 = new Hero("superman", 100);
      //console.log(hero.isAlive())

      let Rat = new livingThing("rat", 5);
      let Goblin = new livingThing("goblin", 30);
      let Ogre = new livingThing("ogre", 80);

      let monsters = [Rat, Goblin, Ogre, Hero]


    //The code below should work when you are done
    console.log("A hero emerges!");

    console.log("The noble " + Hero1.getName() + " has vowed to defeat the monsters and save the realm");
    console.log("Will they be victorious?");

    Hero1.fight(monsters);

    if (Hero1.isAlive()) {
        console.log("The hero, " + Hero1.getName() + ", prevailed!");
    }
    else {
        console.log(Hero1.getName() + " was bested by the monsters. We are doomed");
    }

}());
