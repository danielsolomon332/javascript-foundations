class Snack {
  constructor(type) {
    this.deliciousLevel = "extra";
    this.type = type;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
  }
  getEaten() {
    if (this.amount > 20) {
    this.amount -= 10;
    }
    if (this.amount === 20) {
    this.cuttingItClose = true;
    }
  }
  checkForHealthy() {
    return this.type.toUpperCase().includes("FRUIT")
    // if (this.type.toUpperCase().includes("FRUIT")) {
    // if (this.type.includes("Fruit") || this.type.includes("fruit")) {
    //   return true
    // } else {
    //   return false
    // }
  }
}

module.exports = Snack;
