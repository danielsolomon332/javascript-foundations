class Centaur {
  constructor(newCentaur) {
    this.breed = 'Palomino';
    this.cranky = false;
    this.standing = true;
    this.crankyCounter = 0;
    this.layingDown = false;
  }

  shootBow() {
    this.crankyCounter += 1;
    if (this.layingDown === true){
      return 'NO!'
    } else if (this.crankyCounter <= 2) {
      return 'Twang!!!'
    } else if (this.crankyCounter >= 3) {
      this.cranky = true;
      return 'NO!'
    }
  }

  run() {
    this.crankyCounter += 1;
    if (this.layingDown === true){
      return 'NO!'
    } else if (this.crankyCounter <= 2) {
     return 'Clop clop clop clop!!!'
    } else if (this.crankyCounter >= 3) {
      this.cranky = true;
      return 'NO!'
    }
  }

  sleep() {
    if (this.standing === true) {
      return 'NO!'
    } else if (this.layingDown === true) {
      this.cranky = false;
      this.crankyCounter = 0;
      return 'ZZZZ'
    }
  }

  layDown() {
    if (this.standing === true) {
      this.layingDown = true;
      this.standing = false;
    }
  }

  standUp() {
    if (this.layingDown === true) {
      this.standing = true;
      this.layingDown = false;
    }
  }

  drinkPotion() {
    if (this.layingDown === true) {
      return 'Not while I\'m laying down!'
    } else {
      this.cranky = false;
    }
  }
}



module.exports = Centaur;
