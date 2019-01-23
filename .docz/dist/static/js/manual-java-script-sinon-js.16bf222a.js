(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"./manual/JavaScript/Sinon-JS.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function p(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=i(this,l(n).call(this,e))).layout=null,t}var t,o,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,a.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;c(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"sinon-js"}},"Sinon JS"),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"table-of-contents"}},"Table of contents"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#sinon-js"}},"Sinon JS"),a.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#table-of-contents"}},"Table of contents")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#basic-example"}},"Basic example"))))),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"basic-example"}},"Basic example"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// form/index.js\nimport { create } from 'apisauce';\n\nexport const api =\n    process.env.NODE_ENV === 'production'\n        ? create({\n              baseURL: 'http://',\n              headers: {\n                  Accept: 'application/vnd.github.v3+json'\n              }\n          })\n        : create({\n              baseURL: 'http://localhost:4444',\n              headers: {\n                  'Content-Type': 'application/json'\n              }\n          });\n\nexport default class Form {\n    static submit = async (values) => {\n        // ! This is what I am targeting\n        const res = await api.post('/form', values);\n        return res;\n    };\n}\n\n// form/form.mocha.js\nimport form, { api } from './index';\nimport sinon from 'sinon';\n\ndescribe('#submit()', function() {\n    it('should return 201', (done) => {\n        (async () => {\n            // ! We'll stub api.post so a request is not sent\n            var post = sinon.stub(api, 'post');\n            post.onCall(0).returns({ ok: true, status: 201 });\n\n            const res = await form.submit({ test: true });\n            post.restore();\n            expect(res.status).to.equal(201);\n            done();\n        })();\n    });\n});\n")))}}])&&p(t.prototype,o),s&&p(t,s),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-java-script-sinon-js.305817e8304de77c75ce.js.map