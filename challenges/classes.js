// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(obj) {
  this.length = obj.length;
  this.width = obj.width;
  this.height = obj.height;
  };

  volume(length, width, height) {
    return this.length * this.width * this.height;
  };

  surfaceArea(length, width, height) {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };


};

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(obj) {
    super(obj);
  };

  cubeVolume() {
    return Math.pow(this.length, 3);
  };

  cubeSurfaceArea() {
    return 6 * Math.pow(this.length, 2);
  };
};

const Cube = new CubeMaker ({
  length: 5,
  width: 5,
  height: 5,
});

console.log(Cube.cubeVolume());
console.log(Cube.cubeSurfaceArea());
