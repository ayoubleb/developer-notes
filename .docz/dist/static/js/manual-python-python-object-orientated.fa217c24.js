(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{"./manual/Python/Python-Object-Orientated.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function c(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=p(this,l(n).call(this,e))).layout=null,t}var t,a,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement("div",{id:"section"}),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"objects"}},"Objects"),o.a.createElement("div",{id:"objects1"}),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-----creating-instances"}},"---- Creating Instances"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},">>> class Monster:\n...     hit_points=1\n...     color=\"blue\"\n...     weapon=\"sword\"\n...\n>>> monster = Monster()\n>>> monster.hit_points\n1\n>>> monster.weapon\n'sword'\n>>> monster.color\n'blue'\n\n# jubjub instance\n>>> jubjub = Monster()\n>>> type(jubjub)\n<type 'instance'>\n>>> jubjub.hit_points\n1\n>>> jubjub.hit_points = 5\n>>> jubjub.hit_points\n5\n")),o.a.createElement("div",{id:"objects2"}),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-----class-methods"}},"---- Class Methods"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},">>> class Methods:\n...     a = 2\n...     sound=\"roar\"\n...     def battlecry(self):\n...             return self.sound.upper()\n...\n>>> general = Methods()\n>>> general.battlecry()\n'ROAR'\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Code Challenge"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'class Store:\n    open = 9\n    close = 18\n\n    def hours(self):\n        return "We\'re open from {} to {}".format(self.open, self.close)\n')),o.a.createElement("div",{id:"objects3"}),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-----_--init--_"}},"---- ","_"," ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"h3"}," init ")," ","_"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Dealing with the dunder init!"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"class Monster:\n    def __init__(self, **kwargs):\n        self.hit_points = kwargs.get('hit_points', 5)\n        self.weapon = kwargs.get('weapon', 'sword')\n        self.color = kwargs.get('color', 'yellow')\n        self.sound = kwargs.get('sound', 'yell')\n\nmonster = Monster(hit_points=22, color=\"green\")\n")),o.a.createElement("div",{id:"inheritance"}),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"python-inheritance"}},"Python Inheritance"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Building on from before, we're just making some defaults..."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"class Monster:\n    min_hp = 1\n    max_hp = 1\n    min_exp = 1\n    max_exp = 1\n    weapon = 'sword'\n    sound = 'roar'\n\n    def __init__(self, **kwargs):\n        self.hp = random.randint(self.min_hp, self.max_hp)\n        self.exp = random.randint(self.min_exp, self.max_exp)\n        self.color = random.choice(COLORS)\n\n        for key, value in kwargs.items():\n            setattr(self, key, value)\n\n    def battlecry(self):\n        return self.sound.upper()\n\nnew_mon = Monster()\nnew_mon.hp\n# 1\nnew_mon.color\n# 'blue'\n\nfresh = Monster(color='blue', sound='whistling', hp='500', adjective='manxsome')\nfresh.color\n# 'blue'\nfresh.adjective\n# manxsome\n")),o.a.createElement("div",{id:"inheritance2"}),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-----python-subclassing"}},"---- Python Subclassing"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"# building on from monster\n\nclass Goblin(Monster):\n    max_hp = 3\n    max_exp = 2\n    sound = 'squek'\n\ngolbin = Goblin()\ngoblin.hp\n# 2 - now isn't just 1 from the min/max set above!\ngoblin.color\n# 'blue'\n\nclass Troll(Monster):\n    min_hp = 3\n    max_hp = 5\n    min_exp = 2\n    max_exp = 6\n    sound = 'growl'\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Challenge"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Create a new class named Dragon that extends the Monster class. Don't forget to import Monster from monster. Give your Dragon an integer size attribute."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"from monster import Monster\n\nclass Dragon(Monster):\n    size = 12\n")),o.a.createElement("div",{id:"inheritance3"}),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-----_--str--_"}},"---- ","_"," ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"h3"}," str ")," ","_"),o.a.createElement(r.MDXTag,{name:"p",components:n},"This helps us when we print(object)"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"class Monster:\n    ...\n    def __str__(self):\n        return '{} {}, HP: {} ...'.format(self.color.title(), self.__class__.__name__, self.hp, self.exp)\n    ...\n\ndraco = Monster()\nprint(draco)\n# returns the details from the magic method\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Challenge"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Import Game from game. Make a new class named GameScore that extends Game. Use pass if needed."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Add a ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"str")," method to GameScore that returns the score in the string \"Player 1: 5; Player 2: 10\", using the correct values from self.score. self.score is a tuple with Player 1's score and Player 2's score like (5, 10).\nYou do not need to define self.score. It comes from the Game class."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'from game import Game\n\nclass GameScore(Game):\n    pass\n\n    def __str__(self):\n        return "Player 1: {}; Player 2: {}".format(*self.score)\n')),o.a.createElement("div",{id:"inheritance4"}),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-----instance-methods"}},"---- Instance Methods"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"class Character:\n    exp = 0\n    hp = 10\n\n    def __init__(self, **kwargs):\n        self.name = input(\"Name: \")\n        self.weapon = self.get_weapon()\n        for k, v in kwargs.items():\n            setattr(self, k, v)\n\n    def get_weapon(self):\n        weapon_choice = input(\"Weapon: [S]word, [A]xe: \").lower()\n\n        if weapon_choice in 'sa':\n            if weapon_choice == 's':\n                return 'sword'\n            else\n                return 'axe'\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Challenge"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Add a score method to Game that takes a player argument. The player argument will be either 1 or 2. Increase that player's value in self.current_score by 1. You'll need to adjust the index (i.e. player = 1 means self.current_score","[0]"," needs to increase)."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"class Game:\n  def __init__(self):\n    self.current_score = [0, 0]\n\n  def score(self, player):\n    if player in [1,2]:\n        if player == 1:\n            self.current_score[0] += 1\n        elif player == 2:\n            self.current_score[1] += 1\n        return\n")),o.a.createElement("div",{id:"inheritance5"}),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"-----overriding-inheritance"}},"---- Overriding Inheritance"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"class Character(Combat):\n    attack_limit = 10\n\n    # pretend that we're overriding the Combat attack method)\n    def attack(self):\n        roll = random.randint(1, self.attack_limit)\n        if self.weapon == 'sword':\n            roll += 1\n        elif self.weapon == 'axe':\n            roll +=2\n        return roll > 4\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Code Challenge"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Animal.noise() returns self.sound.lower(). Make Sheep.noise() return the uppercased version of the instance's sound."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'from animal import Animal\n\nclass Sheep(Animal):\n    sound = "Bless"\n\n    def noise(self):\n        return self.sound.upper()\n')))}}])&&c(t.prototype,a),s&&c(t,s),n}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-python-python-object-orientated.305817e8304de77c75ce.js.map