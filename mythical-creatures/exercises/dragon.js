class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.hungryMeter = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`
  }
  
  eat() {
    this.hungryMeter += 1
      if (this.hungryMeter >= 3) {
        return this.hungry = false;
      }
    }
  }



module.exports = Dragon;
