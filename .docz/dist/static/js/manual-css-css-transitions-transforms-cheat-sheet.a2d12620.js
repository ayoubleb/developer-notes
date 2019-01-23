(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"./manual/CSS/css-transitions-transforms-cheat-sheet.md":function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return u});var o=e("./node_modules/react/index.js"),a=e.n(o),r=e("./node_modules/@mdx-js/tag/dist/index.js");function s(n){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){if(null==n)return{};var e,o,a=function(n,t){if(null==n)return{};var e,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}function c(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function l(n,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function m(n,t){return(m=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}var u=function(n){function t(n){var e;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=l(this,p(t).call(this,n))).layout=null,e}var e,o,s;return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&m(n,t)}(t,a.a.Component),e=t,(o=[{key:"render",value:function(){var n=this.props,t=n.components;i(n,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:t},a.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"css-transitions-and-transforms-cheat-sheet"}},"CSS Transitions and Transforms Cheat Sheet"),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-css"}},"/* =================================\n  Photo Overlay Transition\n==================================== */\n\n.photo-overlay {\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: .5s;\n}\n.photo-overlay:hover {\n    opacity: 1;\n}\n\n/* =================================\n  Button Transitions\n==================================== */\n\n.button {\n    opacity: 0;\n    transition-property: opacity, background, box-shadow;\n    transition-duration: .5s;\n    transition-delay: .2s, .3s, 0s;\n}\n\n.button:hover {\n    background: rgba(74, 137, 202, 1);\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .7);\n}\n\n.photo-overlay:hover .button {\n    opacity: 1;\n}\n\n.btn-icon {\n    transition-property: opacity, left;\n    transition-duration: .5s;\n    transition-delay: .3s;\n    transition-timing-function: ease-in-out, ease-out;\n}\n\n.button:hover .btn-icon {\n    opacity: 1;\n    left: 80%;\n}\n\n// The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.\n// Multiple properties can be written in this shorthand with a comma in between.\n\n/* =================================\n          Code Challenges\n==================================== */\n\n/* nav-item transitions ---------- */\n\n.nav-item {\n    flex-grow: 1;\n  transition-property: flex-grow;\n  transition-duration: .5s;\n  transition-timing-function: ease-out;\n}\n\n.nav-item:hover {\n    flex-grow: 2;\n}\n\n/* nav icon transitions ---------- */\n\n.icon {\n  right: -25px;\n  transition: right .4s ease-in-out 300ms;\n}\n\n.nav-item:hover .icon {\n    right: 12%;\n}\n\n/* =================================\n  Image Transforms & Transitions\n==================================== */\n\n/* -- Row 1 --------- */\n\nimg {\n    transition: transform .5s;\n}\n\nimg:hover {\n    transform: rotate(-5deg) scale(1.1);\n}\n\n/* -- Row 2 --------- */\n\n.photo img {\n    transform-origin: 0 0;\n}\n\n.photo:hover img {\n    transform: scale(1.2);\n}\n\n/* -- Row 3 --------- */\n\n.slide .photo-overlay,\n.slide img {\n    transition: transform .6s ease-out;\n}\n\n.slide .photo-overlay {\n    transform: translateX(-100%);\n}\n\n.slide:hover .photo-overlay {\n    transform: translateX(0);\n}\n\n.slide:hover img {\n    transform: translateX(100%);\n}\n\n/* -- Logo ---------- */\n\n.logo:hover {\n    transform: rotate(-20deg);\n}\n")),a.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"photo-3d-transforms--transitions"}},"Photo 3D Transforms & Transitions"),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html"}},'/* =================================\n  Photo 3D Transforms & Transitions\n==================================== */\n\n<!DOCTYPE html>\n<html>\n<head>\n    <title>3D Transform Gallery</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link href=\'https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800\' rel=\'stylesheet\' type=\'text/css\'>\n    <link rel="stylesheet" href="css/main.css">\n    <link rel="stylesheet" href="css/interactions.css">\n</head>\n<body>\n    <div class="container">\n        <header class="main-header clearfix">\n            <img class="logo" src="img/camera.svg">\n            <h1 class="name">3DTransform <span>Gallery</span></h1>\n        </header>\n\n        <div class="content clearfix">\n\n            <div class="cube-container">\n                <div class="photo-cube">\n\n                    <img class="front"src="img/photos/1.jpg" alt="">\n                    <div class="back photo-desc">\n                      <h3>Earth from Space</h3>\n                      <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n                        <a href="#" class="button">download</a>\n                    </div>\n                    <img class="left" src="img/photos/2.jpg" alt="">\n                    <img class="right" src="img/photos/3.jpg" alt="">\n\n                </div>\n            </div>\n\n            <div class="cube-container">\n                <div class="photo-cube">\n\n                    <img class="front"src="img/photos/4.jpg" alt="">\n                    <div class="back photo-desc">\n                      <h3>Space Images</h3>\n                      <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n                        <a href="#" class="button">download</a>\n                    </div>\n                    <img class="left" src="img/photos/5.jpg" alt="">\n                    <img class="right" src="img/photos/6.jpg" alt="">\n\n                </div>\n            </div>\n\n            <div class="cube-container">\n                <div class="photo-cube">\n\n                    <img class="front"src="img/photos/7.jpg" alt="">\n                    <div class="back photo-desc">\n                      <h3>The Milky Way</h3>\n                      <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n                        <a href="#" class="button">download</a>\n                    </div>\n                    <img class="left" src="img/photos/8.jpg" alt="">\n                    <img class="right" src="img/photos/9.jpg" alt="">\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</body>\n</html>\n')),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-css"}},".cube-container {\n    box-shadow: 0 18px 40px 5px rgba(0,0,0,.4);\n    perspective: 800px;\n}\n\n.photo-cube {\n    transition: transform 2s ease-in-out;\n    width: 220px;\n    height: 200px;\n    transform-style: preserve-3d;\n}\n\n.photo-cube:hover {\n    transform: rotateY(-270deg);\n}\n\n.front,\n.back,\n.left,\n.right {\n    width: 100%;\n    height: 100%;\n    display: block;\n    position: absolute;\n}\n\n.front {\n    transform: translateZ(110px);\n}\n\n.back {\n    transform: translateZ(-110px) rotateY(270deg);\n    transform-origin: center left;\n}\n\n.left {\n    transform: rotateY(-270deg) translateX(110px);\n    transform-origin: top right;\n}\n\n.right {\n    transform: translateZ(-110px) rotateY(180deg);\n}\n\n/* Complete the challenge by writing CSS below */\n\n.wrapper {\n  perspective: 600px;\n}\n\n.photo {\n  transform: rotate3d(0,1,0,30deg);\n}\n")),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"/* =================================\n  Load JavaScript after Transition\n==================================== */\n\nmap.$elem.toggleClass('-active').one(\"transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd\", function () {\n    if (!map.map) {\n        map.initMap();\n    }\n});\n")))}}])&&c(e.prototype,o),s&&c(e,s),t}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-css-css-transitions-transforms-cheat-sheet.305817e8304de77c75ce.js.map