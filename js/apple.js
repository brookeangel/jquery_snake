var Coord = require('./coord');

var Apple = function(board) {
  this.board = board;
  this.newCoord();
};

Apple.prototype.newCoord = function() {
  var i, j;

  do {
    i = Math.floor(Math.random() * this.board.size);
    j = Math.floor(Math.random() * this.board.size);
  }
  while (this.overlapBadApple(i, j));
  this.coord = new Coord(i, j);
};

Apple.prototype.overlapBadApple = function(x, y) {
  var badApples = this.board.badApples;
  for (var i = 0; i < badApples.length; i++) {
    if((badApples[i].i === x) && (badApples[i].j === y)) {
      return true;
    }
  };
  return false;
};


module.exports = Apple;
