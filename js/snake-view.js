var Board = require('./board');

var SnakeView = function($el) {
  this.board = new Board(50);
  this.$el = $el;
  this.canTurn = true;
  this.setupBoard();

  $(window).on("keydown", this.handleKeyEvent.bind(this));
  $('ul').on("click", "li", this.startGame.bind(this));
};

SnakeView.KEYSTROKES = {
  38: "N",
  39: "E",
  40: "S",
  37: "W"
};

SnakeView.prototype.startGame = function(e) {
  this.$el.find('h1').text('Snaaaaaaake')
  this.$el.find('li').removeClass();
  $(e.currentTarget).addClass('selected');
  this.$el.find('.message').text('');

  var speed = parseInt($(e.currentTarget).data('speed'));
  this.board.reset();
  this.interval = window.setInterval(this.step.bind(this), speed);
};

SnakeView.prototype.handleKeyEvent = function(e) {
  var newDir = SnakeView.KEYSTROKES[e.keyCode];
  if (newDir && this.canTurn) {
    this.board.snake.turn(newDir);
    this.canTurn = false;
  }
};

SnakeView.prototype.step = function() {
  if (this.board.isValid()) {
    this.render();
    this.board.snake.move();
    this.canTurn = true;
  } else {
    debugger;
    this.$el.find('h1').text('You lose! Try again?')
    window.clearInterval(this.interval);
  }
};

SnakeView.prototype.render = function() {
  var snake = this.board.snake;
  var apple = this.board.apple;
  var badApples = this.board.badApples;

  this.updateScore();
  this.updateClasses(snake.segments, "snake");
  this.updateClasses([apple.coord], "apple");
  this.updateClasses(badApples, "bad-apple");
};

SnakeView.prototype.updateScore = function() {
  this.$el.find(".score-board").html(this.board.snake.score);
};

SnakeView.prototype.updateClasses = function(coords, klass) {
  this.$div.filter("." + klass).removeClass();

  coords.forEach(function(coord) {
    var flatCoord = coord.i * this.board.size + coord.j;
    this.$div.eq(flatCoord).addClass(klass);
  }.bind(this));
};

SnakeView.prototype.setupBoard = function() {
  this.$el.html('');
  var $header = $('<figure class="header"></figure>');
  $header.append('<h1>Snaaaaaaake</h1>');
  $header.append(
    '<ul><li data-speed="125">Easy</li><li data-speed="85">Medium</li><li data-speed="50">Hard</li></ul>'
  );

  var $score = $('<span class="score-board">0</figure>');
  $header.append($score);
  this.$el.append($header);

  var $board = $('<figure class="snake-board"></div>');
  for (var i = 0; i < this.board.size; i++) {
    for (var j = 0; j < this.board.size; j++) {
      var $square = $('<div></div>')
      $board.append($square);
    };
  };

  this.$el.append($board);
  this.$div = this.$el.find('div');
};

module.exports = SnakeView;
