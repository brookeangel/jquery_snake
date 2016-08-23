require("!style!css!../css/style.css");
var SnakeView = require("./snake-view.js");

$(function() {
  new SnakeView($('#snake-board'));
});
