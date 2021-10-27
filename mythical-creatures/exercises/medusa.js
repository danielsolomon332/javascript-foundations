var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    if (this.statues.length <= 2) {
      var newVictim = new Statue(victim.name);
      this.statues.push(newVictim);
    } else if (this.statues.length = 3) {
      var newVictim = new Statue(victim.name);
      this.statues.push(newVictim);
      var freeVictim = Object.assign(victim, this.statues[0]);
      freeVictim.mood = 'relieved'
      this.statues.shift();
      return freeVictim
    }
  }
}


module.exports = Medusa;
