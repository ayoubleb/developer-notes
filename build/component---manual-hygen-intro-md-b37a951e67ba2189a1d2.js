(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{zBjt:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),s=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Hygen/intro.md"}});var l={_frontmatter:o},i=s.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(a.b)(i,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"intro-to-hygen"},"Intro to Hygen"),Object(a.b)("p",null,"Hygen is a really great template engine that allows us to harness the power of multiple JS libraries and use them to make our lives easier."),Object(a.b)("h2",{id:"links"},"Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"http://hygen.io/"}),"Hygen.io site"))),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"First, ensure that you install Hygen."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"npm i -g hygen\n")),Object(a.b)("p",null,"Hygen then uses the ",Object(a.b)("inlineCode",{parentName:"p"},"_templates")," folder on direction for what to create."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"_templates")," folder may have a structure like so:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"_templates\n└── react\n    ├── component\n    │   ├── mocha.ejs.t\n    │   ├── prompt.js\n    │   ├── puppeteer.ejs.t\n    │   ├── readme.ejs.t\n    │   ├── story.ejs.t\n    │   ├── styles.ejs.t\n    │   └── view.ejs.t\n    ├── component-promptless\n    │   ├── mocha.ejs.t\n    │   ├── puppeteer.ejs.t\n    │   ├── readme.ejs.t\n    │   ├── story.ejs.t\n    │   ├── styles.ejs.t\n    │   └── view.ejs.t\n    ├── multi-component\n    │   ├── container.ejs.t\n    │   ├── default.ejs.t\n    │   ├── docs.ejs.t\n    │   ├── mocha.ejs.t\n    │   ├── prompt.js\n    │   ├── puppeteer.ejs.t\n    │   ├── readme.ejs.t\n    │   ├── typeOne.ejs.t\n    │   ├── typeTwo.ejs.t\n    │   └── view.ejs.t\n    ├── reducer\n    │   ├── prompt.js\n    │   └── reducer.ejs.t\n    └── redux-component\n        ├── container.ejs.t\n        ├── mocha.ejs.t\n        ├── prompt.js\n        ├── puppeteer.ejs.t\n        ├── readme.ejs.t\n        ├── story.ejs.t\n        └── view.ejs.t\n")),Object(a.b)("p",null,"How this works in practise is that you can invoke the following calls and Hygen will generate those files according to the rules:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"# Examples\n\n# Generate the files from react > components\nhygen react component\n# Generate the files from react > reducer\nhygen react reducer\n")),Object(a.b)("p",null,"Hygen can work using a prompt or without one. I recommend going with, and using ",Object(a.b)("inlineCode",{parentName:"p"},"prompt.js")," to set the questions."),Object(a.b)("p",null,"For an example from start to finish, I will demonstate using ",Object(a.b)("inlineCode",{parentName:"p"},"hygen react component"),"."),Object(a.b)("h2",{id:"-hygen-react-component"},"> hygen react component"),Object(a.b)("p",null,"Running the command will first look for a ",Object(a.b)("inlineCode",{parentName:"p"},"prompt.js")," file."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"module.exports = [\n    {\n        type: 'input',\n        name: 'name',\n        message: \"What's the name?\"\n    },\n    {\n        type: 'input',\n        name: 'message',\n        message: \"What's the message?\"\n    }\n];\n")),Object(a.b)("p",null,"Hygen uses Inquirer (which in turn uses RxJS) to create prompts. In this example, answering ",Object(a.b)("inlineCode",{parentName:"p"},"name")," and ",Object(a.b)("inlineCode",{parentName:"p"},"message")," will in turn create variables that are used thorugh the ",Object(a.b)("inlineCode",{parentName:"p"},"[file].ejs.t")," files."),Object(a.b)("p",null,"Hygen will then go through the rest of the files and export them to where is defined at the top of the ",Object(a.b)("inlineCode",{parentName:"p"},"[file].ejs.t")," file. For example, ",Object(a.b)("inlineCode",{parentName:"p"},"mocha.ejs.t")," will have:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"---\nto: src/components/<%= name %>/<%= name %>.mocha.js\n---\n")),Object(a.b)("p",null,"If we enter name ",Object(a.b)("inlineCode",{parentName:"p"},"PageTestNewFiles"),", it will output file ",Object(a.b)("inlineCode",{parentName:"p"},"src/components/PageTestNewFiles/PageTestNewFiles.mocha.js"),". This will continue for all the files, and so in ",Object(a.b)("inlineCode",{parentName:"p"},"src/components/PageTestNewFiles")," we will end up with the following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-Javascript"}),"PageTestNewFiles\n├── PageTestNewFiles.mocha.js\n├── PageTestNewFiles.puppeteer.js\n├── PageTestNewFiles.storybook.js\n├── README.md\n├── index.js\n└── styles.scss\n")),Object(a.b)("p",null,"Where ",Object(a.b)("inlineCode",{parentName:"p"},"<%= name %>")," and ",Object(a.b)("inlineCode",{parentName:"p"},"<%= message %>")," is found throughout those files will be in turn replaced with the entered values."),Object(a.b)("p",null,"If there are any issues with the Hygen generated files, go to the template file and change the templates to resolve any issues."))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Hygen/intro.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-hygen-intro-md-b37a951e67ba2189a1d2.js.map