(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{"./manual/React-Notes/Flux-Basics.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a("./node_modules/react/index.js"),o=a.n(n),r=a("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=p(this,m(t).call(this,e))).layout=null,a}var a,n,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.a.Component),a=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components;c(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"flux-help-sheet"}},"Flux Help Sheet"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#flux-help-sheet"}},"Flux Help Sheet"),o.a.createElement(r.MDXTag,{name:"ul",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#flux-1-what-is-flux"}},"FLUX-1: What is Flux?")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#flux-2-the-dispatcher"}},"FLUX-2: The Dispatcher")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#flux-3-stores"}},"FLUX-3: Stores")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#flux-4-action-creators--actions"}},"FLUX-4: Action Creators & Actions")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#flux-5-putting-it-together"}},"FLUX-5: Putting it together"))))),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Sources")),o.a.createElement(r.MDXTag,{name:"p",components:t},"What is Flux? from ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture"}},"Scotch.io")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Declaring Singletons in ES6 from ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://medium.com/@softwarecf/flux-stores-and-es6-9b453dbf9db#.4yo043nti"}},"Medium")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"flux-1-what-is-flux"}},"FLUX-1: What is Flux?"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Flux is an architecture that Facebook uses internally when working with React. It is not a framework or a library. It is simply a new kind of architecture that complements React and the concept of Unidirectional Data Flow."),o.a.createElement(r.MDXTag,{name:"p",components:t},"That said, Facebook does provide a repo that includes a Dispatcher library. The dispatcher is a sort of global pub/sub handler that broadcasts payloads to registered callbacks."),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"4 Components")),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"1. Actions")," \u2013 Helper methods that facilitate passing data to the Dispatcher\n",o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"2. Dispatcher")," \u2013 Receives actions and broadcasts payloads to registered callbacks\n",o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"3. Stores")," \u2013 Containers for application state & logic that have callbacks registered to the dispatcher\n",o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"4. Controller Views")," \u2013 React Components that grab the state from Stores and pass it down via props to child components"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Flux helps to solve some of the difficulty we run into with unidirectional data flow when it comes to changing Application State that is higher up the virtual DOM than the Components that alter that State themselves."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Controllers do exist in a Flux application, but they are controller-views."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Action creators \u2014 dispatcher helper methods \u2014 are used to support a semantic API that describes all changes that are possible in the application. It can be useful to think of them as a fourth part of the Flux update cycle."),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"The graphical process")),o.a.createElement("img",{src:"https://cask.scotch.io/2014/10/V70cSEC.png"}),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"How does the API relate to this?")),o.a.createElement(r.MDXTag,{name:"p",components:t},"When you are working with data that is coming from (or going to) the outside, I\u2019ve found that using Actions to introduce the data into the Flux Flow, and subsequently Stores, is the most painless way to go about it."),o.a.createElement(r.MDXTag,{name:"hr",components:t}),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"flux-2-the-dispatcher"}},"FLUX-2: The Dispatcher"),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"What is it?")),o.a.createElement(r.MDXTag,{name:"p",components:t},"The Dispatcher is basically the manager of this entire process. It is the central hub for your application. The dispatcher receives actions and dispatches the actions and data to registered callbacks."),o.a.createElement(r.MDXTag,{name:"p",components:t},"The dispatcher broadcasts the payload to ALL of its registered callbacks, and includes functionality that allows you to invoke the callbacks in a specific order, even waiting for updates before proceeding. There is only ever one dispatcher, and it acts as the central hub within your application. It is not exactly a pub/sub."),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Example Dispatcher")),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"var Dispatcher = require('flux').Dispatcher;\nvar AppDispatcher = new Dispatcher();\n\nAppDispatcher.handleViewAction = function(action) {\n    this.dispatch({\n        source: 'VIEW_ACTION',\n        action: action\n    });\n};\n\nmodule.exports = AppDispatcher;\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"In the above example, we create an instance of our Dispatcher and create a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"handleViewAction")," method. This abstraction is helpful if you are looking to distinguish between view triggered actions v.s. server/API triggered actions."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Our method calls the dispatch method, which will broadcast the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"action")," payload to all of its registered callbacks. This action can then be acted upon within Stores, and will result in a state update."),o.a.createElement(r.MDXTag,{name:"p",components:t},"The diagram below illustrates this process:"),o.a.createElement("img",{src:"https://cask.scotch.io/2014/10/hKbN2q6.png"}),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Dependencies")),o.a.createElement(r.MDXTag,{name:"p",components:t},"One of the coolest parts of the provided Dispatcher module is the ability to define dependencies and marshall the callbacks on our Stores. So if one part of your application is dependent upon another part being updated first, in order to render properly, the Dispatcher\u2019s ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"waitFor")," method will be mighty useful."),o.a.createElement(r.MDXTag,{name:"p",components:t},"In order to utilize this feature, we need to store the return value of the Dispatcher\u2019s registration method on our Store as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dispatcherIndex"),", as shown below:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"ShoeStore.dispatcherIndex = AppDispatcher.register(function(payload) {});\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Then in our Store, when handling a dispatched action, we can use the Dispatcher\u2019s ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"waitFor")," method to ensure our ShoeStore has been updated:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"case 'BUY_SHOES':\n  AppDispatcher.waitFor([\n    ShoeStore.dispatcherIndex\n  ], function() {\n    CheckoutStore.purchaseShoes(ShoeStore.getSelectedShoes());\n  });\n  break;\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"flux-3-stores"}},"FLUX-3: Stores"),o.a.createElement(r.MDXTag,{name:"p",components:t},"In Flux, Stores manage application state for a particular domain within your application. From a high level, this basically means that per app section, stores manage the data, data retrieval methods and dispatcher callbacks."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Lets take a look at a basic Store:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"var AppDispatcher = require('../dispatcher/AppDispatcher');\nvar ShoeConstants = require('../constants/ShoeConstants');\nvar EventEmitter = require('events').EventEmitter;\nvar merge = require('react/lib/merge');\n\n// Internal object of shoes\nvar _shoes = {};\n\n// Method to load shoes from action data\nfunction loadShoes(data) {\n    _shoes = data.shoes;\n}\n\n// Merge our store with Node's Event Emitter\nvar ShoeStore = merge(EventEmitter.prototype, {\n    // Returns all shoes\n    getShoes: function() {\n        return _shoes;\n    },\n\n    emitChange: function() {\n        this.emit('change');\n    },\n\n    addChangeListener: function(callback) {\n        this.on('change', callback);\n    },\n\n    removeChangeListener: function(callback) {\n        this.removeListener('change', callback);\n    }\n});\n\n// Register dispatcher callback\nAppDispatcher.register(function(payload) {\n    var action = payload.action;\n    var text;\n    // Define what to do for certain actions\n    switch (action.actionType) {\n        case ShoeConstants.LOAD_SHOES:\n            // Call internal method based upon dispatched action\n            loadShoes(action.data);\n            break;\n\n        default:\n            return true;\n    }\n\n    // If action was acted upon, emit change event\n    ShoeStore.emitChange();\n\n    return true;\n});\n\nmodule.exports = ShoeStore;\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"The most important thing from above")," is extending our store with NodeJS's EventEmitter."),o.a.createElement(r.MDXTag,{name:"p",components:t},"This allows our stores to listen/broadcast events. This allows our Views/Components to update based upon those events. Because our Controller View listens to our Stores, leveraging this to emit change events will let our Controller View know that our application state has changed and its time to retrieve the state to keep things fresh."),o.a.createElement(r.MDXTag,{name:"p",components:t},"This is what ES6 notation looks like. We instead can extend EventEmitter."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"import EventEmitter from 'events';\n\nvar CHANGE_EVENT = 'change';\n\nclass Store extends EventEmitter {\n    constructor() {\n        super();\n    }\n\n    emitChange() {\n        this.emit(CHANGE_EVENT);\n    }\n\n    addChangeListener(callback) {\n        this.on(CHANGE_EVENT, callback);\n    }\n\n    removeChangeListener(callback) {\n        this.removeListener(CHANGE_EVENT, callback);\n    }\n}\n\nStore.dispatchToken = null;\n\nexport default Store;\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"We also registered a callback with our AppDispatcher using its register method. This means that our Store is now listening to AppDispatcher broadcasts. Our switch statement determines whether, for a given broadcast, if there are any relevant actions to take. If a relevant action is taken, a change event is emitted, and views that are listening for this event update their states."),o.a.createElement("img",{src:"https://cask.scotch.io/2014/10/rHwGUog.png"}),o.a.createElement(r.MDXTag,{name:"p",components:t},"Our public method getShoes is used by our Controller View to retrieve all of the shoes in our ","_","shoes object and use that data in our components state. While this is a simple example, complicated logic can be put here instead of our views and helps keep things tidy."),o.a.createElement(r.MDXTag,{name:"hr",components:t}),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"flux-4-action-creators--actions"}},"FLUX-4: Action Creators & Actions"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Action Creators are collections of methods that are called within views (or anywhere else for that matter) to send actions to the Dispatcher. ",o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Actions are the actual payloads")," that are delivered via the dispatcher."),o.a.createElement(r.MDXTag,{name:"p",components:t},"The way Facebook uses them, action type constants are used to define what action should take place, and are sent along with action data. Inside of registered callbacks, these actions can now be handled according to their action type, and methods can be called with action data as the arguments."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Lets check out a constants definition:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// ES5\n\nvar keyMirror = require('react/lib/keyMirror');\n\nmodule.exports = keyMirror({\n  LOAD_SHOES: null\n});\n\n// ES6\n\nimport keyMirror from 'react';\n\nexport keyMirror({\n        LOAD_SHOES: null\n    });\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Above we use React\u2019s ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"keyMirror")," library to mirror our keys so that our value matches our key definition."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Just by looking at this file, we can tell that our app loads shoes. The use of constants helps keep things organized, and helps give a high level view of what the app actually does."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Now lets take a look at the corresponding Action Creator definition:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// ES 5\n\nvar AppDispatcher = require('../dispatcher/AppDispatcher');\nvar ShoeStoreConstants = require('../constants/ShoeStoreConstants');\n\nvar ShoeStoreActions = {\n\n  loadShoes: function(data) {\n    AppDispatcher.handleAction({\n      actionType: ShoeStoreConstants.LOAD_SHOES,\n      data: data\n    })\n  }\n\n};\n\nmodule.exports = ShoeStoreActions;\n\n// ES6\n\nimport AppDispatcher from '../dispatcher/AppDispatcher';\nimport ShoeStoreConstants from '../constants/ShoeStoreConstants';\n\nclass ShoeStoreActions {\n    public function loadShoes(data) {\n        AppDispatcher.handleAction({\n          actionType: ShoeStoreConstants.LOAD_SHOES,\n          data: data\n        });\n\n        return;\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"In our example above, we created a method on our ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ShoeStoreActions")," object that calls our dispatcher with the data we provided. We can now import this actions file into our view or API, and call ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ShoeStoreActions.loadShoes(ourData)")," to send our payload to the Dispatcher, which will broadcast it. Then the ShoeStore will \u201chear\u201d that event and call a method thats loads up some shoes!"),o.a.createElement("img",{src:"https://cask.scotch.io/2014/10/4tBnC0e.png"}),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"/** @jsx React.DOM */\n\nvar React = require('react');\nvar ShoesStore = require('../stores/ShoeStore');\n\n// Method to retrieve application state from store\nfunction getAppState() {\n    return {\n        shoes: ShoeStore.getShoes()\n    };\n}\n\n// Create our component class\nvar ShoeStoreApp = React.createClass({\n    // Use getAppState method to set initial state\n    getInitialState: function() {\n        return getAppState();\n    },\n\n    // Listen for changes\n    componentDidMount: function() {\n        ShoeStore.addChangeListener(this._onChange);\n    },\n\n    // Unbind change listener\n    componentWillUnmount: function() {\n        ShoesStore.removeChangeListener(this._onChange);\n    },\n\n    render: function() {\n        return <ShoeStore shoes={this.state.shoes} />;\n    },\n\n    // Update view state when change event is received\n    _onChange: function() {\n        this.setState(getAppState());\n    }\n});\n\nmodule.exports = ShoeStoreApp;\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"In the example above, we listen for change events using addChangeListener, and update our application state when the event is received."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Our application state data is held in our Stores, so we use the public methods on the Stores to retrieve that data and then set our application state."),o.a.createElement(r.MDXTag,{name:"hr",components:t}),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"flux-5-putting-it-together"}},"FLUX-5: Putting it together"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Now that we have gone through each individual part of the Flux architecture, we should have a much better idea of how this architecture actually works. Remember our graphical representation of this process from before? Lets have a look at a bit more granular view of this, now that we understand the function of each part of the flow."),o.a.createElement("img",{src:"https://cask.scotch.io/2014/10/duZH2Sz.png"}))}}])&&i(a.prototype,n),s&&i(a,s),t}();h.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-react-notes-flux-basics.305817e8304de77c75ce.js.map