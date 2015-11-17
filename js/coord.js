(function () {
  if (typeof SG === "undefined") {
    window.SG = {};
  }

  var Coord = SG.Coord = function(i, j) {
    this.i = i;
    this.j = j;
  };

  Coord.prototype.plus = function(otherCoord) {
    this.i = this.i + otherCoord.i;
    this.j = this.j + otherCoord.j;
  };

  Coord.prototype.equals = function(otherCoord) {
    return (this.i === otherCoord.i) && (this.j === otherCoord.j);
  };

  Coord.prototype.isOpposite = function(otherCoord) {
    return (this.i === -1 * otherCoord.i) && (this.j === -1 * otherCoord.j);
  };
})();

// module.exports = Coord;
