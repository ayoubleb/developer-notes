(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{"./manual/React/guidelines.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function s(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=c(this,i(n).call(this,e))).layout=null,t}var t,a,p;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement(r.MDXTag,{name:"p",components:n},"Author: Dennis O'Keeffe"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"section-react"}},"Section: React"),o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"guidelines-for-using-react"}},"Guidelines for using React"),o.a.createElement(r.MDXTag,{name:"p",components:n},"These are by no means rules but ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"guidelines")," for how to decide on whether the component should connect directly Redux and making decisions on whether or not the component is required in multiple forms, readied for different platforms etc."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"sections"}},"Sections"),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"When to use Redux and connect a function?"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"When to decide to use a multicomponent?")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"1-when-to-use-redux-and-connect-a-function"}},"1. When to use Redux and connect a function?"),o.a.createElement(r.MDXTag,{name:"p",components:n},'There are two types of components: stateful ("smart") components and stateless ("dumb") components.'),o.a.createElement(r.MDXTag,{name:"p",components:n},'The "dumb" stateless components have one job: ',o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Take data as input and display"),". In order to make components malleable and reusable, we aim to decouple them from state and ensure that they can then be reuseable and display differing information based on what is handed down to them."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Take the following example:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'// Stateless, "dumb" component\nconst ComponentNumberDisplay = props => (\n    <div className="component-number-display">\n        <p className="copy">{props.number}</p>\n    </div>\n);\n\n// Stateful, "smart" components\nconst PageOne = () => (\n    <section className="page-one">\n        <div className="container-content">\n            <ComponentNumberDisplay number={4} />\n        </div>\n    </section>\n);\n\nconst PageTwo = () => (\n    <section className="page-two">\n        <div className="container-content">\n            <ComponentNumberDisplay number={7} />\n            <ComponentNumberDisplay number={10} />\n        </div>\n    </section>\n);\n\nconst PageThree = () => {\n    const numbers = [1,2,3];\n    const mapComponentNumberDisplays = (numbers) => {\n        return numbers.map((number, index) => (<ComponentNumberDisplay key={index} number={number} />)\n    }\n\n    return (\n        <section className="page-two">\n            <div className="container-content">\n                {mapComponentNumberDisplays(numbers)}\n            </div>\n        </section>\n    );\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"In this example, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PageOne"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PageTwo"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PageThree"),' are all "smart", stateful components, although this means that they themselves are not very reusable given how rigid they are for what the display.'),o.a.createElement(r.MDXTag,{name:"p",components:n},"On the other hand, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ComponentNumberDisplay")," will just display whatever is passed down from the parent itself. The aim of the game is to pass down props from the ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"single")," parent that we connect up. In the case of the web and apps, we should make the stateful component the ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"page")," where possible and pass down the rest of the props."),o.a.createElement(r.MDXTag,{name:"p",components:n},"To illustrate this, we will now introduce a Redux connected component and how data will be passed down the chain."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'// Stateless, "dumb" component\nconst ComponentNumberDisplay = (props) => (\n    <div className="component-number-display">\n        <p className="copy">{props.number}</p>\n    </div>\n);\n\n// Stateless, "dumb" component\nconst ComponentTextDisplay = (props) => (\n    <div className="component-number-display">\n        <p className="copy">{props.copy}</p>\n    </div>\n);\n\n// Stateless, "dumb" component\nconst ComponentDataDisplay = (props) => (\n    <React.Fragment>\n        <ComponentNumberDisplay {...props} />\n        <ComponentTextDisplay {...props} />\n    </React.Fragment>\n);\n\n// In another file, PageOne\nimport React, { Component } from \'react\';\nimport { connect } from \'react-redux\';\n\n/* user imports */\nimport ComponentDataDisplay from \'app/components/ComponentDataDisplay\';\n\nclass PageOne extends Component {\n    /**\n     * Render <%= name %> component\n     * @memberof <%= name %>\n     * @var {function} render Render <%= name %> component\n     * @returns {<%= name %>} component\n     */\n    render() {\n        const { number, copy } = this.props;\n        return (\n            <div className="page-one">\n                <ComponentDataDisplay {...props} />\n                {/* Alternative to be specific */}\n                <ComponentDataDisplay number={number} copy={copy} />\n            </div>\n        );\n    }\n}\n\n// Map reducer state to a props object\nconst mapStateToProps = (state) => ({\n    number: state.SomeReducer.number,\n    copy: state.AnotherReducer.copy\n});\n\n// Connect those props to the component\nexport default connect(mapStateToProps, {})(PageOne);\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"In this example, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PageOne")," is connected to Redux and gets ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"number")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"copy")," added to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"props"),". From here, we can either destructure those variables or just pass down all the props to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ComponentDataDisplay"),". Within the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ComponentDataDisplay"),", we've just again passed down all the props from ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PageOne")," and in the case of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ComponentNumberDisplay")," this means there is a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"props.number")," variable and for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ComponentTextDisplay")," a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"props.copy")," variable."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Use your best decision making when deciding whether to pass down specific props or just all props."))}}])&&s(t.prototype,a),p&&s(t,p),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-react-guidelines.305817e8304de77c75ce.js.map