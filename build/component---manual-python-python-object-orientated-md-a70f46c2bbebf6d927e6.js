(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{Fo9M:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return b}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Python/Python-Object-Orientated.md"}});var o={_frontmatter:l},c=a.a;function b(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(c,s({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"python-object-orientated"},"Python Object Orientated"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#python-object-orientated"}),"Python Object Orientated"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#table-of-contents"}),"Table of Contents")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#objects"}),"Objects"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#-----creating-instances"}),"---- Creating Instances")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#-----class-methods"}),"---- Class Methods")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#-----_-_-init-_-_"}),"---- ","_"," ",Object(r.b)("em",{parentName:"a"}," init ")," ","_")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#python-inheritance"}),"Python Inheritance"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#-----python-subclassing"}),"---- Python Subclassing")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#-----_-_-str-_-_"}),"---- ","_"," ",Object(r.b)("em",{parentName:"a"}," str ")," ","_")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#-----instance-methods"}),"---- Instance Methods")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"#-----overriding-inheritance"}),"---- Overriding Inheritance"))))))),Object(r.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(r.b)("a",{href:"#section"},"title"),"---- ",Object(r.b)("a",{href:"#subsection"},"title"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"objects"},"Objects"),Object(r.b)("h2",{id:"creating-instances"},"Creating Instances"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),">>> class Monster:\n...     hit_points=1\n...     color=\"blue\"\n...     weapon=\"sword\"\n...\n>>> monster = Monster()\n>>> monster.hit_points\n1\n>>> monster.weapon\n'sword'\n>>> monster.color\n'blue'\n\n# jubjub instance\n>>> jubjub = Monster()\n>>> type(jubjub)\n<type 'instance'>\n>>> jubjub.hit_points\n1\n>>> jubjub.hit_points = 5\n>>> jubjub.hit_points\n5\n")),Object(r.b)("h2",{id:"class-methods"},"Class Methods"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),">>> class Methods:\n...     a = 2\n...     sound=\"roar\"\n...     def battlecry(self):\n...             return self.sound.upper()\n...\n>>> general = Methods()\n>>> general.battlecry()\n'ROAR'\n")),Object(r.b)("p",null,"Code Challenge"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),'class Store:\n    open = 9\n    close = 18\n\n    def hours(self):\n        return "We\'re open from {} to {}".format(self.open, self.close)\n')),Object(r.b)("h2",{id:"_--init--_"},"_"," ",Object(r.b)("em",{parentName:"h2"}," init ")," ","_"),Object(r.b)("p",null,"Dealing with the dunder init!"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"class Monster:\n    def __init__(self, **kwargs):\n        self.hit_points = kwargs.get('hit_points', 5)\n        self.weapon = kwargs.get('weapon', 'sword')\n        self.color = kwargs.get('color', 'yellow')\n        self.sound = kwargs.get('sound', 'yell')\n\nmonster = Monster(hit_points=22, color=\"green\")\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"python-inheritance"},"Python Inheritance"),Object(r.b)("p",null,"Building on from before, we're just making some defaults..."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"class Monster:\n    min_hp = 1\n    max_hp = 1\n    min_exp = 1\n    max_exp = 1\n    weapon = 'sword'\n    sound = 'roar'\n\n    def __init__(self, **kwargs):\n        self.hp = random.randint(self.min_hp, self.max_hp)\n        self.exp = random.randint(self.min_exp, self.max_exp)\n        self.color = random.choice(COLORS)\n\n        for key, value in kwargs.items():\n            setattr(self, key, value)\n\n    def battlecry(self):\n        return self.sound.upper()\n\nnew_mon = Monster()\nnew_mon.hp\n# 1\nnew_mon.color\n# 'blue'\n\nfresh = Monster(color='blue', sound='whistling', hp='500', adjective='manxsome')\nfresh.color\n# 'blue'\nfresh.adjective\n# manxsome\n")),Object(r.b)("h2",{id:"python-subclassing"},"Python Subclassing"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"# building on from monster\n\nclass Goblin(Monster):\n    max_hp = 3\n    max_exp = 2\n    sound = 'squek'\n\ngolbin = Goblin()\ngoblin.hp\n# 2 - now isn't just 1 from the min/max set above!\ngoblin.color\n# 'blue'\n\nclass Troll(Monster):\n    min_hp = 3\n    max_hp = 5\n    min_exp = 2\n    max_exp = 6\n    sound = 'growl'\n")),Object(r.b)("p",null,"Challenge"),Object(r.b)("p",null,"Create a new class named Dragon that extends the Monster class. Don't forget to import Monster from monster. Give your Dragon an integer size attribute."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"from monster import Monster\n\nclass Dragon(Monster):\n    size = 12\n")),Object(r.b)("h2",{id:"_--str--_"},"_"," ",Object(r.b)("em",{parentName:"h2"}," str ")," ","_"),Object(r.b)("p",null,"This helps us when we print(object)"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"class Monster:\n    ...\n    def __str__(self):\n        return '{} {}, HP: {} ...'.format(self.color.title(), self.__class__.__name__, self.hp, self.exp)\n    ...\n\ndraco = Monster()\nprint(draco)\n# returns the details from the magic method\n")),Object(r.b)("p",null,"Challenge"),Object(r.b)("p",null,"Import Game from game. Make a new class named GameScore that extends Game. Use pass if needed."),Object(r.b)("p",null,"Add a ",Object(r.b)("strong",{parentName:"p"},"str")," method to GameScore that returns the score in the string \"Player 1: 5; Player 2: 10\", using the correct values from self.score. self.score is a tuple with Player 1's score and Player 2's score like (5, 10).\nYou do not need to define self.score. It comes from the Game class."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),'from game import Game\n\nclass GameScore(Game):\n    pass\n\n    def __str__(self):\n        return "Player 1: {}; Player 2: {}".format(*self.score)\n')),Object(r.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"class Character:\n    exp = 0\n    hp = 10\n\n    def __init__(self, **kwargs):\n        self.name = input(\"Name: \")\n        self.weapon = self.get_weapon()\n        for k, v in kwargs.items():\n            setattr(self, k, v)\n\n    def get_weapon(self):\n        weapon_choice = input(\"Weapon: [S]word, [A]xe: \").lower()\n\n        if weapon_choice in 'sa':\n            if weapon_choice == 's':\n                return 'sword'\n            else\n                return 'axe'\n")),Object(r.b)("p",null,"Challenge"),Object(r.b)("p",null,"Add a score method to Game that takes a player argument. The player argument will be either 1 or 2. Increase that player's value in self.current_score by 1. You'll need to adjust the index (i.e. player = 1 means self.current_score","[0]"," needs to increase)."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"class Game:\n  def __init__(self):\n    self.current_score = [0, 0]\n\n  def score(self, player):\n    if player in [1,2]:\n        if player == 1:\n            self.current_score[0] += 1\n        elif player == 2:\n            self.current_score[1] += 1\n        return\n")),Object(r.b)("h2",{id:"overriding-inheritance"},"Overriding Inheritance"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"class Character(Combat):\n    attack_limit = 10\n\n    # pretend that we're overriding the Combat attack method)\n    def attack(self):\n        roll = random.randint(1, self.attack_limit)\n        if self.weapon == 'sword':\n            roll += 1\n        elif self.weapon == 'axe':\n            roll +=2\n        return roll > 4\n")),Object(r.b)("p",null,"Code Challenge"),Object(r.b)("p",null,"Animal.noise() returns self.sound.lower(). Make Sheep.noise() return the uppercased version of the instance's sound."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),'from animal import Animal\n\nclass Sheep(Animal):\n    sound = "Bless"\n\n    def noise(self):\n        return self.sound.upper()\n')))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Python/Python-Object-Orientated.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-python-python-object-orientated-md-a70f46c2bbebf6d927e6.js.map