(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./manual/AWS/AWS-NodeSDK.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var a=t("./node_modules/react/index.js"),r=t.n(a),o=t("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function i(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,p(n).call(this,e))).layout=null,t}var t,a,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,r.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;c(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"aws-node-sdk"}},"AWS Node SDK"),r.a.createElement(o.MDXTag,{name:"ul",components:n},r.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#aws-node-sdk"}},"AWS Node SDK"),r.a.createElement(o.MDXTag,{name:"ul",components:n,parentName:"li"},r.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#loading-credentials-in-nodejs-from-environment-variables"}},"Loading Credentials in Node.js from Environment Variables")),r.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-use-in-a-task-runner---get-ec2-details-back"}},"Example use in a task runner - get EC2 Details back"))))),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"loading-credentials-in-nodejs-from-environment-variables"}},"Loading Credentials in Node.js from Environment Variables"),r.a.createElement(o.MDXTag,{name:"ul",components:n},r.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},"AWS_ACCESS_KEY_ID"),r.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},"AWS_SECRET_ACCESS_KEY"),r.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},"AWS_SESSION_TOKEN (optional)")),r.a.createElement(o.MDXTag,{name:"p",components:n},"These can be set into your ENV variables."),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"example-use-in-a-task-runner---get-ec2-details-back"}},"Example use in a task runner - get EC2 Details back"),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"var fs = require('fs');\nconst util = require('util');\nvar dotenv = require('dotenv');\nvar envConfig = dotenv.parse(fs.readFileSync('.env'));\nfor (var k in envConfig) {\n    process.env[k] = envConfig[k];\n}\n\nvar gulp = require('gulp');\n\n// Load the SDK for JavaScript\nvar AWS = require('aws-sdk');\n\nvar params = {\n    InstanceIds: [process.env.EC2_INSTANCE_ID]\n};\n\n/* Get EC2 Details */\ngulp.task('info', function() {\n    AWS.config = {\n        accessKeyId: process.env.AWS_ACCESS_KEY,\n        secretAccessKey: process.env.AWS_SECRET_KEY,\n        region: process.env.AWS_REGION\n    };\n\n    // Create EC2 service object\n    ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });\n\n    // Call EC2 to retrieve the policy for selected bucket\n    ec2.describeInstances(params, function(err, data) {\n        if (err) {\n            console.log('Error', err.stack);\n        } else {\n            console.log('Success', util.inspect(data, { depth: 6 }));\n        }\n    });\n});\n")))}}])&&i(t.prototype,a),s&&i(t,s),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-aws-aws-node-sdk.305817e8304de77c75ce.js.map