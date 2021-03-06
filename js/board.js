var Apple = require('./apple');
var Snake = require('./snake');
var Coord = require('./coord');

var Board = function(size) {
  this.size = size;
  this.badApples = [];
  this.apple = new Apple(this);
  this.snake = new Snake(this);
  this.grid = this.blankGrid();
};

Board.prototype.reset = function() {
  this.snake = new Snake(this);
  this.apple = new Apple(this);
  this.badApples = [];
};

Board.prototype.onBoard = function() {
  var snakeI = this.snake.segments[0].i;
  var snakeJ = this.snake.segments[0].j;

  return snakeI >= 0 && snakeI < this.size && snakeJ >= 0 && snakeJ < this.size;
};

Board.prototype.isValid = function() {
  return this.onBoard() && !(this.snake.eatingSelf()) && !(this.snake.poisoned());
};

Board.prototype.addPoison = function() {
  var i = Math.floor(Math.random() * this.size);
  var j = Math.floor(Math.random() * this.size);
  this.badApples.push(new Coord(i, j));
};

Board.prototype.blankGrid = function() {
  var row;
  var grid = [];
  var blankSpace = " ";

  for (var i = 0; i < 50; i++) {
    row = [];
    for (var j = 0; j < 50; j++) {
      row.push(blankSpace);
    }
    grid.push(row);
  }

  return grid;
};


module.exports = Board;
