(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{maP0:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return l}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),i=a("TjRS");a("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Testing/mocha-and-chai.md"}});var o={_frontmatter:r},c=i.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(c,s({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("hr",null),Object(n.b)("p",null,"Author: Dennis O'Keeffe"),Object(n.b)("h2",{id:"section-testing"},"Section: Testing"),Object(n.b)("h1",{id:"mocha-and-chai"},"Mocha and Chai"),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://mochajs.org/"}),"Mocha Website")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"http://www.chaijs.com/api/"}),"Chai API")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"http://airbnb.io/enzyme/docs/api/"}),"Enzyme API")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md"}),"Puppeteer API"))),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)("p",null,"Testing is done using Mocha and Chai for evaluation and uses Enzyme for rendering out React components to evaulate state for the React app at any given time and Puppeteer to evaulate UI testing."),Object(n.b)("p",null,"The app itself can be developed using both Behaviour Driven Development and Test Drive Development."),Object(n.b)("p",null,"We use Mocha as the main framework to layout the test suites and test specs themselves, and to evaluate the individual test specs, we use the Chai library."),Object(n.b)("p",null,"Basic example:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// Example function to test\nfunction add(x, y) {\n    return x + y;\n}\n\n// Test suite\ndescribe('JavaScript functionality for a file', () => {\n    // Test spec\n    it('expects true to be true', () => {\n        expect(true).to.be.true; // evaluates to true - test passes\n    });\n\n    // Test spec\n    it('expects 1 + 2 to equal 3', () => {\n        const result = add(1, 2);\n        expect(result).to.equal(3); // evaluates to true - test passes\n    });\n});\n")),Object(n.b)("p",null,"For best practise, when testing classes and functions which comprise of straight Javascript (no React element ie js lib subfolders, utilities and helpers), just use Mocha and Chai to evaluate an expectation."),Object(n.b)("p",null,"To incorporate BDD in this scenariom you can use Mocha's ",Object(n.b)("inlineCode",{parentName:"p"},"it"),' function to also scaffold the pending tests in advance that will result in "pass" or "fail" but be ready for when you start writing the evaluation and assertion expecations:'),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// Test suite\ndescribe('JavaScript functionality for a file', () => {\n    // Test spec\n    it('expects true to be true'); // Pending test - won't evaluate as a pass or fail\n});\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Testing/mocha-and-chai.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-testing-mocha-and-chai-md-047b4d3bf8b71a7725ac.js.map