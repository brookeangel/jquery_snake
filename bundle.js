/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var SnakeView = __webpack_require__(5);

	$(function() {
	  new SnakeView($('#snake-board'));
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body, ul, figure, h1 {\n  font-family: sans-serif;\n  background: white;\n  padding: 0px;\n  margin: 0px;\n  overflow: hidden;\n}\n\nh1 {\n  text-align: center;\n  size: 60px;\n}\n\n#snake-board {\n  width: 502px;\n  margin: auto;\n}\n\nul {\n  float: left;\n}\n\nli {\n  padding: 10px;\n  width: 75px;\n  margin-right: 10px;\n  margin-top: 10px;\n  list-style: none;\n  display: inline-block;\n  border: 1px solid black;\n  background-color: cornflowerblue;\n  text-align: center;\n}\n\nli.selected {\n  background-color: green;\n}\n\n.snake-board {\n  margin: auto;\n  border: 1px solid black;\n  width: 500px;\n  height: 500px;\n  background: powderblue;\n}\n\n.snake-board:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n\n.snake-board > div {\n  list-style: none;\n  height: 8px;\n  width: 8px;\n  margin: 1px;\n  float: left;\n}\n\n.snake-board > div.snake {\n  background: green;\n}\n\n.snake-board > div.apple {\n  background: red;\n}\n.snake-board > div.bad-apple {\n  background: black;\n}\n\n.header {\n  margin-bottom: 10px;\n}\n\n.message {\n  font-size: 20px;\n  text-align: center;\n  margin: 20px;\n}\n\n.score-board {\n  height: 30px;\n  line-height: 50px;\n  float:right;\n  font-size: 20px;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Board = __webpack_require__(6);

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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Apple = __webpack_require__(7);
	var Snake = __webpack_require__(9);
	var Coord = __webpack_require__(8);

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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Coord = __webpack_require__(8);

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


/***/ },
/* 8 */
/***/ function(module, exports) {

	var Coord = function(i, j) {
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

	module.exports = Coord;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var Coord = __webpack_require__(8);

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


/***/ }
/******/ ]);