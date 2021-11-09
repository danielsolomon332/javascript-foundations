class Stark {
  constructor(starkInfo) {
    if (starkInfo) {
      this.name = starkInfo.name;
      this.location = starkInfo.area || 'Winterfell';
    }
  }
}




module.exports = Stark;
