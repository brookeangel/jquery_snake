var Coord = require('./coord');

var Snake = function(board) {
  this.score = 0;
  this.direction = "N";
  this.segments = [];
  this.board = board;
  this.segments.push(new Coord(this.board.size / 2, this.board.size / 2));
};

Snake.DIFFS = {
  "N": new Coord(-1,  0),
  "S": new Coord( 1,  0),
  "E": new Coord( 0,  1),
  "W": new Coord( 0, -1)
};

Snake.prototype.isCollided = function() {
  if (this.segments[0].equals(this.board.apple.coord)) {
    this.board.apple.newCoord();
    this.snack();
  }
};

Snake.prototype.snack = function() {
  var lastSegment = this.segments[this.segments.length - 1];
  var newI = lastSegment.i - Snake.DIFFS[this.direction].i;
  var newJ = lastSegment.j - Snake.DIFFS[this.direction].j;
  this.segments.push(new Coord(newI, newJ));
  this.score = this.score + 10;

  if (this.score % 30 === 0) {
    this.board.addPoison();
  }
};

Snake.prototype.turn = function(dir) {
  if (!Snake.DIFFS[dir].isOpposite(Snake.DIFFS[this.direction])) {
    this.direction = dir;
  }
};

Snake.prototype.eatingSelf = function() {
  for (var i = 0; i < this.segments.length; i++) {
    for (var j = i + 1; j < this.segments.length; j++) {
      if (this.segments[i].equals(this.segments[j])) {
        return true;
      }
    };
  };
  return false;
};

Snake.prototype.poisoned = function() {
  for (var i = 0; i < this.board.badApples.length; i++) {
    if (this.segments[0].equals(this.board.badApples[i])) {
      return true;
    }
  }
  return false;
};

Snake.prototype.move = function() {
  var newSegment = new Coord(this.segments[0].i, this.segments[0].j);
  newSegment.plus(Snake.DIFFS[this.direction]);
  this.segments.unshift(newSegment);
  this.segments = this.segments.slice(0, this.segments.length - 1);
  this.isCollided();
};

module.exports = Snake;
