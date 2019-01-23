(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./manual/Android/Lists-And-Adapters.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,l(t).call(this,e))).layout=null,n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;p(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"lists-and-adapters-in-android"}},"Lists and Adapters in Android"),r.a.createElement(o.MDXTag,{name:"p",components:t},r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"What is an adapter?")),r.a.createElement(o.MDXTag,{name:"p",components:t},"If we have our data and a list view, we can then use an adapter to adapt data for the view."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Android provides a number of different adapters."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Example with the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ArrayAdapter"),", it is an extension of the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"BaseAdapter"),"."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Declaring a string adapter would be ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ArrayAdapter<String>")," that can deal with generic types. We specify the type within the angle brackets."),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-java"}},'package teamtreehouse.com.stormy.ui;\n\nimport ...\n\nstatic class DailyForecastActivity extends ListActivity {\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_daily_forecast);\n\n        String[] daysOfTheWeek = {\n            "Sunday",\n            "Monday",\n            ...\n        }\n        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1,\n            daysOfTheWeek);\n\n        setListAdapter(adapter);\n    }\n}\n')))}}])&&c(n.prototype,a),i&&c(n,i),t}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-android-lists-and-adapters.305817e8304de77c75ce.js.map