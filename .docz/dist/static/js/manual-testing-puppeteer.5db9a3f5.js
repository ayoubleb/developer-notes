(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{"./manual/Testing/puppeteer.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./node_modules/@mdx-js/tag/dist/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=i(this,l(t).call(this,e))).layout=null,n}var n,a,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"hr",components:t}),o.a.createElement(r.MDXTag,{name:"p",components:t},"Author: Dennis O'Keeffe"),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"section-testing"}},"Section: Testing"),o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"puppeteer"}},"Puppeteer"),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"resources"}},"Resources"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://mochajs.org/"}},"Mocha Website")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://www.chaijs.com/api/"}},"Chai API")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://airbnb.io/enzyme/docs/api/"}},"Enzyme API")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md"}},"Puppeteer API"))),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),o.a.createElement(r.MDXTag,{name:"p",components:t},"To test the UI itself, we can use Puppeteer, Chrome's Headless Browser to evaluate on the UI itself. Puppeteer can also be set to have ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"headless: false"),", allowing the user to record or watch the test on their screen."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"const puppeteer = require('puppeteer');\n\n// Test suite\ndescribe('PageHome functionality', () => {\n  // Test suite within another test suite - useful for subsectioning tests within a component/page\n  describe('Simple Puppeteer UI test for form elements', () => {\n    it('firstName and lastName from Puppeteer deep equal expected schema', async () => {\n      const expected = {\n        firstName: 'Hello',\n        lastName: 'World'\n      };\n\n      const browser = await puppeteer.launch({ headless: false });\n      const page = await browser.newPage();\n      await page.goto('http://localhost:3000');\n      await page.screenshot({ path: 'example.png' }); // create an example screenshot of current UI state\n      await page.type('input[name=\"firstName\"]', 'Hello');\n      const firstName = await page.$eval(\n        'input[name=\"firstName\"]',\n        (el) => el.value\n      );\n\n      await page.waitFor(500);\n      await page.click('#next');\n      await page.waitForSelector('input[name=\"lastName\"]');\n      await page.type('input[name=\"lastName\"]', 'World');\n      const lastName = await page.$eval(\n        'input[name=\"lastName\"]',\n        (el) => el.value\n      );\n\n      await page.waitFor(500);\n      const formData = {\n        firstName: firstName,\n        lastName: lastName\n      };\n\n      await browser.close();\n\n      expect(formData).to.deep.equal(expected); // evauates to true if form fields hold correct value\n    });\n  });\n});\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"logging"}},"Logging"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"// output logs\npage.on('console', msg => console.log('PAGE LOG:', msg.text()));\n\n// show devtools\nconst browser = await puppeteer.launch({devtools: true});\n")))}}])&&c(n.prototype,a),p&&c(n,p),t}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-testing-puppeteer.305817e8304de77c75ce.js.map