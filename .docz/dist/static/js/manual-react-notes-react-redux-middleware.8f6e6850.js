(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{"./manual/React-Notes/React-Redux-Middleware.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,n){return!n||"object"!==c(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=s(this,i(n).call(this,e))).layout=null,t}var t,a,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"react-with-redux---middleware"}},"React with Redux - Middleware"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#react-with-redux---middleware"}},"React with Redux - Middleware"),o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#redmid-1-overview"}},"REDMID-1: Overview")," - ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#-----redmid-11-component-set-up"}},"---- REDMID-1.1: Component Set up")," - ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#-----redmid-12-controlled-components-and-binding-text"}},"---- REDMID-1.2: Controlled Components and Binding Text"))))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"redmid-1-overview"}},"REDMID-1: Overview"),o.a.createElement(r.MDXTag,{name:"p",components:n},"In the last chapter, we saw some main ideas about Redux. Now, we want to create an app. We will have async (like AJAX) calls in this."),o.a.createElement(r.MDXTag,{name:"p",components:n},"We're going to create a webpage that will search for cities and give back Temp, Pressure and Humidity."),o.a.createElement(r.MDXTag,{name:"p",components:n},"We will use things like a line chart for the temp etc."),o.a.createElement(r.MDXTag,{name:"p",components:n},"In general, the components won't make AJAX calls... we want Redux to that for us."),o.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"-----redmid-11-component-set-up"}},"---- REDMID-1.1: Component Set up"),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"SearchBar"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"App"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"ForecastList"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Chart")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Ensure that within source, you have the folders that you are looking for."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"In containers > SearchBar.js")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'import React, { Component } from \'react\';\n\nexport default class SearchBar extends Component {\n    render() {\n        return (\n            <form className="input-group">\n                <input />\n                <span className="input-group-btn">\n                    <button type="submit" className="btn btn-secondary">\n                        Submit\n                    </button>\n                </span>\n            </form>\n        );\n    }\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"In components > app.js")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"import React, { Component } from 'react';\nimport SearchBar from '../containers/SearchBar.js';\n\nexport default class App extends Component {\n    render() {\n        return (\n            <div>\n                <SearchBar />\n            </div>\n        );\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"-----redmid-12-controlled-components-and-binding-text"}},"---- REDMID-1.2: Controlled Components and Binding Text"),o.a.createElement(r.MDXTag,{name:"p",components:n},"To create the component level state. (not redux)"),o.a.createElement(r.MDXTag,{name:"p",components:n},'Remember, for event handlers, we need to set the callback function where the callback reference is "this", it will have the wrong context from the render section.'),o.a.createElement(r.MDXTag,{name:"p",components:n},'You can fix this in the constructor by let the instance of search bar to bind "this" and replace this.onInputChange with this result.'),o.a.createElement(r.MDXTag,{name:"p",components:n},"The other option sometimes would be to instead of using the constructor, we could us onChange={ () => this.onInputChange }"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"In containers > SearchBar.js")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'import React, { Component } from \'react\'\n\nexport default class SearchBar extends Component {\n\n    contructor(props) {\n        super(props);\n\n        this.state = { term: \'\' };\n\n        this.onInputChage = this.onInputChange.bind(this);\n    }\n\n    onInputChange(event) {\n        console.log(event.target.value);\n        this.setState({ term: event.target.value });\n    }\n\n    render() {\n        return (\n            <form className="input-group">\n                <input\n                    placeholder="Get a 5-day forecast in your favourite cities"\n                    className="form-control"\n                    value={this.state.term}\n                    onChange={this.onInputChange}\n                />\n                <span className="input-group-btn">\n                    <button type="submit" className="btn btn-secondary">Submit</button>\n                </span>\n            </form>\n        )\n    }\n}\n')))}}])&&p(t.prototype,a),c&&p(t,c),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-react-notes-react-redux-middleware.305817e8304de77c75ce.js.map