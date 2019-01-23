(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"./manual/CSS/css-cheat-sheet.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var o=n("./node_modules/react/index.js"),a=n.n(o),r=n("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,p(t).call(this,e))).layout=null,n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components;l(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:t},a.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"css-syntax"}},"CSS Syntax"),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-css"}},'selector {property: value;}\n\nExternal Style Sheet\n<link rel="stylesheet" type="text/css" href="style.css" />\nInternal Style\n<style type="text/css">\nselector {property: value;}\n</style>\nInline Style\n<tag style="property: value">\n')),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"antialiasing"}},"Antialiasing"),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-css"}},"-webkit-font-smoothing: antialiased;\n")),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"css-ordering"}},"CSS Ordering"),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-css"}},".selector {\n  /* Positioning */\n \xa0position: absolute;\n \xa0z-index: 10;\n \xa0top: 0;\n \xa0right: 0;\n\n \xa0/* Display & Box Model */\n \xa0display: inline-block;\n \xa0overflow: hidden;\n \xa0box-sizing: border-box;\n \xa0width: 100px;\n \xa0height: 100px;\n \xa0padding: 10px;\n \xa0border: 10px solid #333;\n \xa0margin: 10px;\n\n \xa0/* Color */\n \xa0background: #000;\n \xa0color: #fff\n \xa0\n \xa0/* Text */\n \xa0font-family: sans-serif;\n \xa0font-size: 16px;\n \xa0line-height: 1.4;\n \xa0text-align: right;\n\n \xa0/* Other */\n \xa0cursor: pointer;\n}\n")),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"css-outline"}},"CSS Outline"),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-css"}},"outline: outline-color outline-style outline-width|initial|inherit;\n")),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"css-find-active-element"}},"CSS find active element"),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"document.activeElement\n")),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"css-general"}},"CSS General"),a.a.createElement(r.MDXTag,{name:"p",components:t},"Class\t\t\t\tString preceded by a period\nID\t\t\t\t\tString preceded by a hash mark\ndiv\t\t\t\t\tFormats structure or block of text\nspan\t\t\t\tInline formatting\ncolor\t\t\t\tForeground color\ncursor\t\t\t\tAppearance of the cursor\ndisplay\t\t\t\tblock; inline; list-item; none\noverflow\t\t\tHow content overflowing its box is handled\nvisible, hidden, scroll, auto\nvisibility\t\t\tvisible, hidden"),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"css-position"}},"CSS Position"),a.a.createElement(r.MDXTag,{name:"p",components:t},"clear\t\t\tAny floating elements around the element?\nboth, left, right, none\nfloat\t\t\tFloats to a specified side\nleft, right, none\nleft\t\t\tThe left position of an element\nauto, length values (pt, in, cm, px)\ntop\t\t\t\tThe top position of an element\nauto, length values (pt, in, cm, px)\nposition\t\tstatic, relative, absolute\nz-index\t\t\tElement above or below overlapping elements?\nauto, integer (higher numbers on top)"),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"css-font"}},"CSS Font"),a.a.createElement(r.MDXTag,{name:"p",components:t},"font-style\t\t\tItalic, normal\nfont-variant\t\tnormal, small-caps\nfont-weight\t\t\tbold, normal, lighter, bolder, integer (100-900)\nfont-size\t\t\tSize of the font\nfont-family\t\t\tSpecific font(s) to be used"),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"css-background"}},"CSS Background"),a.a.createElement(r.MDXTag,{name:"p",components:t},"background-color\t\tBackground color\nbackground-image\t\tBackground image\nbackground-repeat\t\trepeat, no-repeat, repeat-x, repeat-y\nbackground-attachment\tBackground image scroll with the element?\nscroll, fixed\nbackground-position\t\t(x y), top, center, bottom, left, right"),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"css-list"}},"CSS List"),a.a.createElement(r.MDXTag,{name:"p",components:t},"list-style-type\t\t\tType of bullet or numbering in the list\ndisc; circle; square; decimal; lower-roman; upper-roman; lower-alpha; upper-alpha; none\nlist-style-position\t\tPosition of the bullet or number in a list\ninside; outside\nlist-style-image\t\tImage to be used as the bullet in a list"),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"css-text"}},"CSS Text"),a.a.createElement(r.MDXTag,{name:"p",components:t},"letter-spacing\t\tSpace between letters\nline-height\t\t\tVertical distance between baselines\ntext-align\t\t\tHorizontal alignment\ntext-decoration\t\tblink, line-through, none, overline, underline\ntext-indent\t\t\tFirst line indentation\ntext-transform\t\tcapitalize, lowercase, uppercase\nvertical-align\t\tVertical alignment\nword-spacing\t\tSpacing between words"),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"box-model"}},"Box Model"),a.a.createElement(r.MDXTag,{name:"p",components:t},"height;\nwidth;\nmargin-top;\nmargin-right;\nmargin-bottom;\nmargin-left;\npadding-top;\npadding-right;\npadding-bottom;\npadding-left;"),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"border"}},"Border"),a.a.createElement(r.MDXTag,{name:"p",components:t},"border-width\tWidth of the border\nborder-style\tdashed; dotted; double; groove; inset; outset; ridge; solid; none\nborder-color\tColor of the border"),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"setting-a-default-browser-outline"}},"Setting a default browser outline"),a.a.createElement(r.MDXTag,{name:"p",components:t},"outline"),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"css-hiding-an-element"}},"CSS Hiding an element"),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-css"}},".hidden {\n    position:absolute;\n    left:-10000px;\n    top:auto;\n    width:1px;\n    height:1px;\n    overflow:hidden;\n}\n")))}}])&&s(n.prototype,o),i&&s(n,i),t}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-css-css-cheat-sheet.305817e8304de77c75ce.js.map