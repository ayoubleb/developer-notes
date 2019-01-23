(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{"./manual/Nodular/Product-Breakdown.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a("./node_modules/react/index.js"),o=a.n(n),r=a("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=m(this,l(t).call(this,e))).layout=null,a}var a,n,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),a=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components;i(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"product-breakdown"}},"Product Breakdown"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Scope for each product breaks down into a number of categories."),o.a.createElement(r.MDXTag,{name:"p",components:t},"From a business perspective, the questions to define early on about the business itself are:"),o.a.createElement(r.MDXTag,{name:"ol",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"What does the payment model look like? One-off payment, subscription, ads?"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"What is the initial funding you are willing to spend?"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"What does the MVP look like?"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"What does the marketing plan look like? Organic? Paid?"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"What type of employment for the build are we going with? Things to think about here are whether or not the companies will use their own expertise in areas or cut out areas for marketing, sales, customer engagement, designer, user experience and/or software development.")),o.a.createElement(r.MDXTag,{name:"p",components:t},"When it comes to building applications, the initial concepts of the MVP and funding are crucial to deciding what products to include/remove. "),o.a.createElement(r.MDXTag,{name:"p",components:t},"Lean startup principles are normally about getting the product out there, seeing if there is a market for it and then delaying/sacrificing what is/isn't necessary for the initial development. Not all companies work like this - Intercom of Ireland are well known for taking their time and having everything well prepared, although they went through funding to ensure they could have the money to do so. These are the important conversations that founders have with each other."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"development-inquiries"}},"Development Inquiries"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Costs for development greatly vary based on company requests. These requests also have an implicition for ongoing costs."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Given an example with an app that consists of the following:"),o.a.createElement(r.MDXTag,{name:"ol",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Authentication (Login/Signup)."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Entering of personal details."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Configuration form that relates to the product (setting days you want to train)."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Media management."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Database(s)."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Chat functionality.")),o.a.createElement(r.MDXTag,{name:"p",components:t},"The questions I would pose to the founders which have implications on costs are the following:"),o.a.createElement(r.MDXTag,{name:"ol",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Is authentication simply email and password? Do you want/require social media logins such as Facebook, Gmail, Github etc? The requirement for social media logins require more time to set up the app for each respective company you need to submit the app to and may have other legal requirements the company must adhere to."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Is this app iOS only? Is it for Android too? Is there a web app also there for users to access the content online? Each platform has it's own cost and possible barriers involved."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"What happens with the personal details? Are there legal obligations we need to adhere to? Is this configuration simply a small dataset for each personal that call be null/updated/deleted or do we track a history for each change?"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},'Does the app require analytics? If you are using Google Analytics, there of course is an ongoing cost to use GA (it\'s not huge) but that depends on how much data you are tracking. Common analytics recorded are things like "page/screen views", "video play/pause/stops", "personal bio data", "active users" etc. You can make this as verbose as you would like but the rules basically are:',o.a.createElement(r.MDXTag,{name:"ol",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Do anything illegal and you are likely cooked by Apple (Google are surprisingly terrible with app constraints)."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Do anything illegal and you are cooked by the law."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"The more data you collect = the larger the costs."))),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"How is the chat data managed? Are we using a database or a third party tool to help abstract that issue? Third-party integration examples are SendBird (",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://sendbird.com/"}},"https://sendbird.com/"),"), Chat.io (",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.chat.io/pricing/"}},"https://www.chat.io/pricing/"),")"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Do you need a Customer Relationship Management tool? Examples are SalesForce (",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.salesforce.com/"}},"https://www.salesforce.com/"),"), HubSpot (",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.hubspot.com/"}},"https://www.hubspot.com/"),"). Info on what a CRM is can be found here ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.salesforce.com/au/crm/what-is-crm/"}},"https://www.salesforce.com/au/crm/what-is-crm/"),"."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Are you using a Content Management System to update the app data? I personally recommend my Italian friends at ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.datocms.com/"}},"https://www.datocms.com/")," but can be used for decoupling words and images on the app so you have control in real-time for updates. I've used them with Government sites before and it is nice and cheap compared to others. "),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"How is the media managed? Again this can be done with third parties such as Cloudinary ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://cloudinary.com/"}},"https://cloudinary.com/")," and Mux ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://mux.com/"}},"https://mux.com/"),". If you want to store this yourself in a database/storage, you will need to be prepared to have code written to optimise the data which these third parties do or handle some high costs depending on how much media you store."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Does the app UI accessibility compliant? "),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Does the app UI require finesse and animations? Animations - while great for finesse - are generally a time and cost suck."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"How thorough does the app testing need to be? You can prevent updates from going live if tests do not pass."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Do updates to the app happen using Continuous Deployment? I am a massive fan of CircleCI (",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://circleci.com/blog/what-is-continuous-integration/"}},"https://circleci.com/blog/what-is-continuous-integration/"),") and it is actually free if you only need to run one container, but there is a time cost involved for setup."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"How safe do you want the infrastructure? You can set up multiple copies/access points for the apps/data but that means funding the money month-to-month for ongoing costs."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Will all this infrastructure and accounts come under the client accounts? If so, there will be time involved to setup all these accounts (can be done by client or user).")),o.a.createElement(r.MDXTag,{name:"p",components:t},"As you can probably tell, there are a lot of underlying questions beyond the main interface that - while maybe not necessary - need to at least be addressed to give an adequate quote."),o.a.createElement(r.MDXTag,{name:"p",components:t},"The biggest issue with the ongoing costs will be highly correlated to your feature set/third-party integration too, although these third parties generally abstract a lot of the difficult issues and can save you months if not years of development time. "),o.a.createElement(r.MDXTag,{name:"p",components:t},"Depending on your projections, you need to make an educated discussion on whether or not you want these time savings or cost savings based on targets and needs."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"development-costs"}},"Development Costs"),o.a.createElement(r.MDXTag,{name:"p",components:t},"When it comes to development costs, there are basically two models I run by:"),o.a.createElement(r.MDXTag,{name:"ol",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"The costs are generated based on components required for the UI and services required to integrate. The more UI required + the more implementation of services = the highest cost. The resulting product is code that your company owns and that code is given to your company. Any ongoing or recurring costs for the services and infrastructure is on the client to fund. ",o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"li"},"Any extra work after release will require another discussion and cost.")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"The costs are generated based on components required for the UI and services required to integrate. The more UI required + the more implementation of services = the highest cost. The resulting product is code that your company owns and that code is given to your company. Any ongoing or recurring costs for the services and infrastructure is on the client to fund. ",o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"li"},"The client can stay on a retainer cost that equates to how many hours each month they want work done on the product."))))}}])&&c(a.prototype,n),s&&c(a,s),t}();h.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-nodular-product-breakdown.305817e8304de77c75ce.js.map