class LunchBox {
  constructor(nameBox) {
    this.owner = nameBox.owner;
    this.material = nameBox.madeOf;
    this.shape = nameBox.shape;
    this.color = nameBox.color;
    this.snacks = [];
  }
  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }
  findHealthySnacks() {
    var healthyArray = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        healthyArray.push(this.snacks[i].type)
      }
    }
    return healthyArray
  }
}

module.exports = LunchBox;
