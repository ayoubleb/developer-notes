(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"./manual/JavaScript/Testing-Cheat-Sheet.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function m(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,p(n).call(this,e))).layout=null,t}var t,a,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;c(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"testing"}},"Testing"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The test files are stored in the test folders and require the dev dependencies ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sinonjs, jsdom, mocha, chai"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm test")," to view the tests files that are written in that folder."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Testing is still primitive and should be BDD (behaviour driven). Tests that are too specific will cause issues."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"mocha and chai")),o.a.createElement(r.MDXTag,{name:"p",components:n},"These two are used in tandem to assert/expect values. Check out the Chai documentation for relative examples."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Tests consist of test suites and test specs. In order to recreate DOM elements if you are looking to test values etc. from functionality, you can use the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"jsdom")," library and import ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"jquery"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Below is a small example of a test set up."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"import jsdom from 'jsdom-global';\nimport jQuery from '../bower_components/jquery/dist/jquery.min.js';\n\nimport ModuleToTest from 'path/to/module'l\n\n// require sinon/chai\nconst sinon = require('sinon');\nconst expect = require('chai').expect;\n\n// Test suite\ndescribe('These tests are supposed to test some functionality', () => {\n\n    let $;\n    let ageGateFilters;\n    jsdom();\n\n    // this function will run before every Test Spec\n    before(function () {\n        $ = jQuery;\n        const params = ['param1', 'param2', 'param3']\n\n        // create instance\n        const moduleToTest = new ModuleToTest(...params);\n    });\n\n    // Test Spec (unit test)\n    it('This test should return ok', () => {\n        expect(true).to.be.ok;  // returns ok\n    });\n\n    // Test Spec (unit test)\n    it('This test should return true for the ModuleToTest function', () => {\n        expect(moduleToTest.func()).to.equal(true); // returns ok if result is true\n    });\n\n});\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"sinon.js")),o.a.createElement(r.MDXTag,{name:"p",components:n},"This library is used to essentially stub data for functions that require things like ajax etc. No tests currently use this effectively. Examples will be added later if used."),o.a.createElement(r.MDXTag,{name:"p",components:n},"For now, I will show an example of a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spy")," and a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"stub")," (as this may the most relevant): "),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"For the Spy")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"// in module Example\n\nexport default class Example {\n    \n    callout() {\n        let a = 1;\n        let b = 2;\n\n        return target(a,b);\n    }\n\n}\n\n// in a test file\n\nimport Example from 'Example';\n\n// Test suite\ndescribe('A test suite using sinon', () => {\n\n    // this function will run before every Test Spec\n    before(function () {\n        $ = jQuery;\n        const params = ['param1', 'param2', 'param3']\n\n        // create instance\n        const example = new Example(...params);\n    });\n\n    // Test spec (unit test)\n    it('Should return that the async func was called', () => {\n        \n        let targetSpy = sinon.spy(example, 'target');\n\n        // Now, any time we call the function, the spy logs information about it\n        example.callout();\n\n        assert(targetSpy.calledOnce); // returns true\n    });\n});\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"For the Stub")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"// in module Example\n\nexport default class Example {\n    \n    callout(param, callback) {\n        $.ajax({\n            // whatever it normally is\n        }, callback);\n    }\n\n}\n\n// in a test file\n\nimport Example from 'Example';\n\n// Test suite\ndescribe('A test suite using sinon', () => {\n\n    // this function will run before every Test Spec\n    before(function () {\n        $ = jQuery;\n        const params = ['param1', 'param2', 'param3']\n\n        // create instance\n        const example = new Example(...params);\n    });\n\n    // Test spec (unit test)\n    it('Should call callback after saving', () => {\n        \n        //We'll stub $.post so a request is not sent\n        const post = sinon.stub($, 'ajax');\n        post.yields();\n\n        //We can use a spy as the callback so it's easy to verify\n        var callback = sinon.spy();\n\n        example.callout(param, callback);\n\n        post.restore();\n        sinon.assert.calledOnce(callback); // returns true\n    });\n});\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"jsdom")),o.a.createElement(r.MDXTag,{name:"p",components:n},"jsdom is a library that allows you to write a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"innerHTML")," var for the test to use if you want to test out the jQuery values for a test."),o.a.createElement(r.MDXTag,{name:"p",components:n},"For an example, checkout yt ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"test/agegate_test.js"),"."))}}])&&m(t.prototype,a),s&&m(t,s),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-java-script-testing-cheat-sheet.305817e8304de77c75ce.js.map