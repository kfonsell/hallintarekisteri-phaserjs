(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _GameState = require('states/GameState');

var _GameState2 = _interopRequireDefault(_GameState);

var _IntroState = require('states/IntroState');

var _IntroState2 = _interopRequireDefault(_IntroState);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    _classCallCheck(this, Game);

    console.log("Constructor");

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 1280, 1020, Phaser.CANVAS, 'content', {
      create: function create() {
        console.log("Create!");_this.create2();
      },
      preload: function preload() {
        console.log("Preload1");_this.preload();
      },
      resize: function resize() {
        return _this.resize();
      }
    }));

    _this.state.add('IntroState', _IntroState2.default, false);
    _this.state.add('GameState', _GameState2.default, false);
    return _this;
  }

  _createClass(Game, [{
    key: 'resize',
    value: function resize() {}
  }, {
    key: 'create2',
    value: function create2() {
      console.log("Create...");
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.stage.backgroundColor = '#ffffff';

      var clips = [];
      for (var i = 0; i < 4; i++) {
        clips.push(this.add.audio('talk' + i));
      }
      clips.push(this.add.audio('gameover'));
      clips.push(this.add.audio('clock'));

      this.sound.setDecodedCallback(clips, this.start, this);
    }
  }, {
    key: 'start',
    value: function start() {
      this.state.start('IntroState');
    }
  }, {
    key: 'preload',
    value: function preload() {
      console.log("Preload...");
      this.load.spritesheet('hammer', 'graphics/hammer.ss.png', 742, 641);
      this.load.spritesheet('bug', 'graphics/bug_squash.ss.png', 464, 553);
      this.load.spritesheet('party', 'graphics/logos_squash.ss.png', 600, 600);
      this.load.spritesheet('restart', 'graphics/restart.png', 497, 99);
      this.load.image('bg', 'graphics/bg2.jpg');

      this.load.audio('clock', 'sounds/ting.mp3');
      this.load.audio('squash', 'sounds/kaboom.mp3');
      this.load.audio('gameover', 'sounds/applause.mp3');
      this.load.audio('talk0', 'sounds/snort.mp3');
      this.load.audio('talk1', 'sounds/fart.mp3');
      this.load.audio('talk2', 'sounds/beep.mp3');
      this.load.audio('talk3', 'sounds/bell.mp3');
    }
  }]);

  return Game;
}(Phaser.Game);

new Game();

},{"states/GameState":6,"states/IntroState":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;if (getter === undefined) {
      return undefined;
    }return getter.call(receiver);
  }
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Bug = function (_Phaser$Sprite) {
  _inherits(Bug, _Phaser$Sprite);

  function Bug(game, x, y, frame, events) {
    _classCallCheck(this, Bug);

    var initialPos = { x: game.world.centerX, y: game.world.centerY * 1.2 };
    var initialScale = { x: 0.1, y: 0.1 };

    var _this = _possibleConstructorReturn(this, (Bug.__proto__ || Object.getPrototypeOf(Bug)).call(this, game, initialPos.x, initialPos.y, 'bug'));

    _this.anchor.setTo(0.5, 1);
    _this.frame = frame;
    _this.scale = initialScale;
    _this.inputEnabled = true;
    _this.events.onInputDown.add(function () {
      return _this.onInputDown();
    });
    _this.events.onInputOver.add(function () {
      if (!_this._frozen) _this.game.canvas.style.cursor = "pointer";
    });
    _this.events.onInputOut.add(function () {
      _this.game.canvas.style.cursor = "default";
    });

    var targetScale = 0.6 * y / _this.game.world.height;

    var tween = _this.game.add.tween(_this.position).to({ x: x, y: y }, 0, Phaser.Easing.Linear.InOut, true, 0);
    _this.game.add.tween(_this.scale).to({ x: targetScale, y: targetScale }, 0, Phaser.Easing.Linear.InOut, true, 0);
    tween.onComplete.add(function () {
      _this._walking = false;
    });

    _this._squash = _this.game.add.audio('squash');
    _this._squash.volume = 0.3;
    _this._events = events;
    _this._age = 0;
    _this._frozen = false;
    _this._walking = true;
    return _this;
  }

  _createClass(Bug, [{
    key: "freeze",
    value: function freeze() {
      this._frozen = true;
    }
  }, {
    key: "update",
    value: function update() {
      if (!this._frozen) {
        this._age += this.game.time.physicsElapsed;
        if (this._age >= 3) {
          var targetScale = 1.7;
          var targetHeight = this.height / (this.scale.x / targetScale);
          var center = { x: this.game.world.centerX, y: this.game.world.centerY + targetHeight / 2 };
          this.game.add.tween(this.scale).to({ x: targetScale, y: targetScale }, 0, Phaser.Easing.Exponential.Out, true, 0);
          this.game.add.tween(this.position).to(center, 0, Phaser.Easing.Exponential.Out, true, 0);
          this._events.onDefeat(this);
        } else if (this._age >= 2) {
          this.angle = 3 * Math.cos(this.game.time.time / 15);
        } else if (this._walking) {
          this.angle = 5 * Math.cos(this.game.time.time / 30);
        } else {
          this.angle = 0;
        }
      }
      _get(Bug.prototype.__proto__ || Object.getPrototypeOf(Bug.prototype), "update", this).call(this);
    }
  }, {
    key: "squash",
    value: function squash() {
      var _this2 = this;

      if (!this._frozen) {
        this.freeze();
        var tween = this.game.add.tween(this.scale).to({ y: 0 }, 200, Phaser.Easing.Quadratic.Out, true, 100);
        tween.onComplete.add(function () {
          return _this2.destroy();
        });
        this._squash.play();
        this._events.onSquash(this);
      }
    }
  }, {
    key: "onInputDown",
    value: function onInputDown() {
      if (!this._frozen) {
        this._events.onClick(this);
      }
    }
  }]);

  return Bug;
}(Phaser.Sprite);

exports.default = Bug;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Button = function (_Phaser$Button) {
  _inherits(Button, _Phaser$Button);

  function Button(game, x, y, width, height, text, onClick) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, game, x, y, null, onClick));

    var bg = new Phaser.Graphics(_this.game, 0, 0);
    bg.lineStyle(3, 0x000000, 1);
    bg.beginFill(0xFFFFFF, 1);
    bg.drawRoundedRect(0, 0, width, height, 10);
    _this.addChild(bg);
    var textStyle = { font: "bold 32px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    var textElement = new Phaser.Text(_this.game, 0, 0, text, textStyle);
    textElement.setTextBounds(0, 0, width, height);
    _this.addChild(textElement);
    return _this;
  }

  return Button;
}(Phaser.Button);

exports.default = Button;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;if (getter === undefined) {
      return undefined;
    }return getter.call(receiver);
  }
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Hammer = function (_Phaser$Sprite) {
  _inherits(Hammer, _Phaser$Sprite);

  function Hammer(game) {
    _classCallCheck(this, Hammer);

    var _this = _possibleConstructorReturn(this, (Hammer.__proto__ || Object.getPrototypeOf(Hammer)).call(this, game, 0, 0, 'hammer'));

    var hitAnims = [];
    hitAnims.push(_this.animations.add('hit1', [0, 1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1])); // kesk
    hitAnims.push(_this.animations.add('hit2', [0, 1, 2, 3, 4, 5, 7, 7, 7, 7, 7, 7, 7, 5, 4, 3, 2, 1])); // pers
    hitAnims.push(_this.animations.add('hit0', [0, 1, 2, 3, 4, 5, 8, 8, 8, 8, 8, 8, 8, 5, 4, 3, 2, 1])); // kok
    hitAnims.forEach(function (x) {
      return x.onComplete.add(function () {
        return _this.onHitCompleted();
      });
    });
    _this.game.stage.addChild(_this);
    _this.anchor.setTo(0.4, 0.9);
    _this.frame = 0;
    _this.scale.setTo(0.5, 0.5);
    _this._home = { x: _this.game.world.right - _this.anchor.x * _this.width * 1.4, y: _this.game.world.bottom };
    _this.position.setTo(_this._home.x, _this._home.y);
    //const avatar = new Phaser.Sprite(this.game, 400, -30, 'hero', 1);
    //avatar.scale.setTo(0.3, 0.3);
    //avatar.anchor.setTo(0.5, 0.5);
    //this.addChild(avatar);
    return _this;
  }

  _createClass(Hammer, [{
    key: 'hit',
    value: function hit() {
      this.animations.play('hit' + this._target.meta.party, 60, false);
    }
  }, {
    key: 'squashBug',
    value: function squashBug(bug) {
      this._target = bug;
      if (this._tween) {
        this._tween.stop();
      }
    }
  }, {
    key: 'onHitCompleted',
    value: function onHitCompleted() {
      if (!this._target) {
        this._tween = this.game.add.tween(this.position).to(this._home, 0, Phaser.Easing.Linear.InOut, true, 0);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      if (this._target) {
        var speed = this.game.time.physicsElapsed * 2000 * (this.game.width / 1280);
        var dir = Phaser.Point.subtract(this._target.position, this.position);
        if (dir.getMagnitudeSq() > speed * speed) {
          dir.setMagnitude(speed);
          this.x += dir.x;
          this.y += dir.y;
        } else {
          this.position = this._target.position.clone();
          this.hit();
          this._target.squash();
          this._target = null;
        }
      }
      _get(Hammer.prototype.__proto__ || Object.getPrototypeOf(Hammer.prototype), 'update', this).call(this);
    }
  }]);

  return Hammer;
}(Phaser.Sprite);

exports.default = Hammer;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Scoreboard = function (_Phaser$Group) {
  _inherits(Scoreboard, _Phaser$Group);

  function Scoreboard(game) {
    _classCallCheck(this, Scoreboard);

    var _this = _possibleConstructorReturn(this, (Scoreboard.__proto__ || Object.getPrototypeOf(Scoreboard)).call(this, game));

    var style = { font: "bold 70px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    _this.texts = [];
    _this.logos = [];
    var margin = 20;
    var logoSpace = 100;
    var numberSpace = 100;
    var x = margin;
    var y = margin;
    _this.logos.push(_this.add(new Phaser.Sprite(game, x, y, 'party', 0)));
    x += logoSpace;
    _this.texts.push(_this.add(new Phaser.Text(game, x, y, "0", style)));
    x += numberSpace;
    _this.logos.push(_this.add(new Phaser.Sprite(game, x, y, 'party', 1)));
    x += logoSpace;
    _this.texts.push(_this.add(new Phaser.Text(game, x, y, "0", style)));
    x += numberSpace;
    _this.logos.push(_this.add(new Phaser.Sprite(game, x, y, 'party', 2)));
    x += logoSpace;
    _this.texts.push(_this.add(new Phaser.Text(game, x, y, "0", style)));
    x += numberSpace;
    _this.totalText = _this.add(new Phaser.Text(game, x, y, "= 0", style));
    x += numberSpace;

    _this.x = (_this.game.width - x) / 2;

    _this.logos.forEach(function (x) {
      x.width = 80;
      x.height = 80;
    });
    _this.texts.forEach(function (x) {
      //x.scale.setTo(1,3);
    });
    return _this;
  }

  _createClass(Scoreboard, [{
    key: "setPartyScore",
    value: function setPartyScore(index, score) {
      this.texts[index].text = score;
    }
  }, {
    key: "setTotalScore",
    value: function setTotalScore(score) {
      this.totalText.text = "= " + score;
    }
  }]);

  return Scoreboard;
}(Phaser.Group);

exports.default = Scoreboard;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Hammer = require('objects/Hammer');

var _Hammer2 = _interopRequireDefault(_Hammer);

var _Bug = require('objects/Bug');

var _Bug2 = _interopRequireDefault(_Bug);

var _Scoreboard = require('objects/Scoreboard');

var _Scoreboard2 = _interopRequireDefault(_Scoreboard);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var STAGE_DURATION = 5;

var BUGS = [{ index: 0, name: 'Juha', party: 1 }, { index: 1, name: 'Anne', party: 1 }, { index: 2, name: 'Juha', party: 1 }, { index: 3, name: 'Sampo', party: 2 }, { index: 4, name: 'Kaj', party: 2 }, { index: 5, name: 'Alex', party: 0 }, { index: 6, name: 'Juhana', party: 0 }, { index: 7, name: 'Alex', party: 0 }, { index: 8, name: 'Harri', party: 0 }, { index: 9, name: 'Petteri', party: 0 }];

var GameState = function (_Phaser$State) {
  _inherits(GameState, _Phaser$State);

  function GameState() {
    _classCallCheck(this, GameState);

    return _possibleConstructorReturn(this, (GameState.__proto__ || Object.getPrototypeOf(GameState)).apply(this, arguments));
  }

  _createClass(GameState, [{
    key: 'create',
    value: function create() {
      var bg = this.game.add.sprite(0, 0, 'bg', 0);
      bg.width = this.game.width;
      bg.height = this.game.height;
      this.hammer = new _Hammer2.default(this.game);
      this.bugs = this.game.add.group();
      this.stageDuration = 0;
      this.spawnScale = 5;
      this.gameOver = false;

      var headerHeight = 120;
      var border = this.game.add.graphics(0, 0);
      border.lineStyle(10, 0xFFFFFF, 1);
      border.drawRoundedRect(0, headerHeight, this.game.width, this.game.height - headerHeight, 10);
      border.beginFill(0xFFFFFF, 1);
      border.drawRect(0, 0, this.game.width, headerHeight, 0);
      border.endFill();
      this._scoreboard = new _Scoreboard2.default(this.game);
      this.game.add.existing(this._scoreboard);

      this._scores = [0, 0, 0];
      this.tick = this.game.add.audio('clock');
      this.tick.loopFull(1);
      this.gameOverSound = this.game.add.audio('gameover');

      this.talkClips = [];
      for (var i = 0; i < 4; i++) {
        var sound = this.game.add.audio('talk' + i);
        sound.loopFull(0);
        this.talkClips.push(sound);
      }

      //this.spawnBug();
      this.scheduleNextSpawn();
    }
  }, {
    key: 'bugClicked',
    value: function bugClicked(bug) {
      this.hammer.squashBug(bug);
    }
  }, {
    key: 'bugSquashed',
    value: function bugSquashed(bug) {
      var party = bug.meta.party;
      this._scores[party] += 1;
      this._scoreboard.setPartyScore(party, this._scores[party]);
      this._scoreboard.setTotalScore(this._scores[0] + this._scores[1] + this._scores[2]);
    }
  }, {
    key: 'scheduleNextSpawn',
    value: function scheduleNextSpawn() {
      var _this2 = this;

      var scale = (1 + this.game.rnd.frac()) * this.spawnScale;
      console.log("Next bug will appear in " + scale + " seconds.");
      this.game.time.events.add(Phaser.Timer.SECOND * scale, function () {
        return _this2.spawnBug();
      });
    }
  }, {
    key: 'update',
    value: function update() {
      this.stageDuration += this.game.time.physicsElapsed;
      if (this.stageDuration > STAGE_DURATION) {
        this.stageDuration = 0;
        this.spawnScale = this.spawnScale * 0.5;
      }
      if (!this.gameOver) {
        this.bugs.sort('y');
      }

      if (this.bugs.countLiving() == 0) {
        this.talkClips.forEach(function (s) {
          s.volume = 0;
        });
        this.tick.volume = 1;
      }
    }
  }, {
    key: 'onDefeat',
    value: function onDefeat(bug) {
      var _this3 = this;

      while (this.bugs.getTop() != bug) {
        this.bugs.moveUp(bug);
      }
      this.bugs.forEach(function (b) {
        return b.freeze();
      });
      this.gameOver = true;
      this.talkClips.forEach(function (s) {
        s.volume = 0;
      });
      this.gameOverSound.play();
      this.hammer.kill();
      var style = { font: "bold 32px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
      var bar = this.game.add.graphics();
      var text = this.game.add.text(0, 0, 'Voi että, ' + bug.meta.name + ' sai hallintarekisterin runnottua läpi eduskunnassa!', style);
      bar.beginFill(0xFFFFFF, 1);
      bar.drawRect(0, this.game.height - 200, this.game.width, 100);
      text.setTextBounds(0, this.game.height - 200, this.game.width, 100);
      var border = this.game.add.graphics(0, 0);
      border.lineStyle(10, 0xFFFFFF, 1);

      var btn = this.game.add.button(this.game.width / 2, this.game.height - 80, 'restart', function () {
        return _this3.restart();
      }, this, 0, 0, 0);
      btn.anchor.x = 0.5;
      btn.scale.x = 0.5;
      btn.scale.y = 0.5;
    }
  }, {
    key: 'restart',
    value: function restart() {
      this.game.state.start('GameState');
    }
  }, {
    key: 'spawnBug',
    value: function spawnBug() {
      var _this4 = this;

      if (!this.gameOver) {
        var center = { x: this.game.world.centerX, y: this.game.world.centerY };
        var availableBugs = BUGS.filter(function (x) {
          return !_this4.bugs.children.find(function (y) {
            return y.meta === x;
          });
        });
        var character = this.game.rnd.pick(availableBugs);
        if (character) {
          var x = this.game.rnd.between(100, this.game.world.width - 200);
          var y = this.game.rnd.between(this.game.world.height * 0.6, this.game.world.height);
          var newBug = new _Bug2.default(this.game, x, y, character.index, {
            onClick: function onClick(bug) {
              return _this4.bugClicked(bug);
            },
            onDefeat: function onDefeat(bug) {
              return _this4.onDefeat(bug);
            },
            onSquash: function onSquash(bug) {
              return _this4.bugSquashed(bug);
            }
          });
          newBug.meta = character;
          this.bugs.add(newBug);
          this.talkClips.forEach(function (s) {
            s.fadeTo(500, 1);
          });
          this.tick.volume = 0;
        }
        if (this.bugs.countLiving() < 20) {
          this.scheduleNextSpawn();
        }
      }
    }
  }]);

  return GameState;
}(Phaser.State);

exports.default = GameState;

},{"objects/Bug":2,"objects/Hammer":4,"objects/Scoreboard":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Button = require("objects/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var IntroState = function (_Phaser$State) {
  _inherits(IntroState, _Phaser$State);

  function IntroState() {
    _classCallCheck(this, IntroState);

    return _possibleConstructorReturn(this, (IntroState.__proto__ || Object.getPrototypeOf(IntroState)).apply(this, arguments));
  }

  _createClass(IntroState, [{
    key: "create",
    value: function create() {
      var _this2 = this;

      var style = { font: "bold 32px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
      var text1 = this.game.add.text(0, 0, 'Tehtävänäsi on torpata hallintarekisteriä ajavien poliitikkojen aikeet.', style);
      text1.setTextBounds(0, this.game.height / 2 - 100, this.game.width, 100);
      var btn = new _Button2.default(this.game, this.game.width / 2 - 130, this.game.height / 2 + 200, 260, 60, "Aloita peli", function () {
        return _this2.startGame();
      });
      this.game.add.existing(btn);
      text1.alpha = 0;
      btn.alpha = 0;
      this.game.add.tween(text1).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0);
      this.game.add.tween(btn).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 2000);
    }
  }, {
    key: "startGame",
    value: function startGame() {
      this.game.state.start('GameState');
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return IntroState;
}(Phaser.State);

exports.default = IntroState;

},{"objects/Button":3}]},{},[1])
//# sourceMappingURL=game.js.map
