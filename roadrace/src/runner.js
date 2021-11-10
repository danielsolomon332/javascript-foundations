class Runner {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }

  runSomeMiles(milesRun) {
    this.milesRun += milesRun;
    this.fitness += milesRun;
  }

  stretch() {
    this.fitness += 0.5;
  }

  runRace(raceName, raceMiles) {
    this.completedRaces.push(raceName);
    this.runSomeMiles(raceMiles);

  }
}

module.exports = Runner;
