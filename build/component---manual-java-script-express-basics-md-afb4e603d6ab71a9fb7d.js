(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{"n+EP":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var l=n("/FXl"),a=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/Express-Basics.md"}});var b={_frontmatter:s},o=a.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(l.b)(o,r({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"express-basics"},"EXPRESS BASICS"),Object(l.b)("h2",{id:"exp-1-getting-started-with-express"},"EXP-1: Getting Started with Express"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Installing express")),Object(l.b)("p",null,"For this example..."),Object(l.b)("p",null,"git clone ",Object(l.b)("a",r({parentName:"p"},{href:"https://github.com/hdngr/treehouse-express-basics.git"}),"https://github.com/hdngr/treehouse-express-basics.git")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Your first Express App")),Object(l.b)("p",null,"client: web browser\nroutes: urls for different pages"),Object(l.b)("p",null,"//in app.js"),Object(l.b)("p",null,"'use strict'; //throws error if you make one"),Object(l.b)("p",null,"var express = require('express'); //now can access all methods and properties of express through this."),Object(l.b)("p",null,"var app = express();"),Object(l.b)("p",null,"//app variable will extended"),Object(l.b)("p",null,"//set up dev server"),Object(l.b)("p",null,"app.get('/', function(request, response) {\n});"),Object(l.b)("p",null,"app.listen(3000);"),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Improving your first app",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"some findal touches")))),Object(l.b)("p",null,"Quick enhancements"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"'use strict'; //throws error if you make one\n\nvar express = require('express'); //now can access all methods and properties of express through this.\n\nvar app = express();\n\n//app variable will extended\n\n//set up dev server\n\napp.get('/', function(req, res) {\n  //req and res are convention\n  res.send('<h1>I Love Treehouse!<h1>');\n});\n\napp.listen(3000, function() {\n  console.log('The frontend server is running on port 3000!');\n});\n")),Object(l.b)("p",null,"PART 2: DEVELOPING EXPRESS APPS LIKE A BOSS"),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Adding Routes to the App")),Object(l.b)("p",null,"Routes are an important part of Express."),Object(l.b)("p",null,"We make can make some dummy json data for testing..."),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "I like to run!": {\n    "title": "I like to run!",\n    "description": "Fanny pack vinyl put a bird on it, small"\n  },\n  "Crossfit is cool!": {\n    "title": "Crossfit is cool!",\n    "description": "Fanny pack vinyl put a bird on it, small"\n  },\n  "Swimming is great for the joints": {\n    "title": "Swimming is great for the joints",\n    "description": "Fanny pack vinyl put a bird on it, small"\n  }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"//app.js\n\n'use strict'; //throws error if you make one\n\nvar express = require('express'); //now can access all methods and properties of express through this.\nvar post = require('./mock/posts.json');\n\nvar app = express();\n\n//app variable will extended\n\n//set up dev server\n\napp.get('/', function(req, res) {\n  //req and res are convention\n  res.send('<h1>I Love Treehouse!<h1>');\n});\n\napp.get('/blog', function(req, res) {\n  res.send(post);\n});\n\napp.listen(3000, function() {\n  console.log('The frontend server is running on port 3000!');\n});\n")),Object(l.b)("p",null,"QUESTIONS"),Object(l.b)("p",null,"/////////////////"),Object(l.b)("p",null,"Create a get method for a /blog html extension."),Object(l.b)("p",null,"Use the send method on the response object to return the posts object when the /blog route is requested."),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"'use strict';\n\nvar express = require('express');\nvar posts = require('./mock/posts.json');\n\nvar app = express();\n\napp.get('/', function(req, res) {\n  res.send('<h1>I Love Treehouse!</h1>');\n});\n\napp.get('/blog', function(req, res) {\n  res.send(posts);\n});\n\napp.listen(3000, function() {\n  console.log('The frontend server is running on port 3000!');\n});\n")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Easily Debug Express")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Programming it iterative.")),Object(l.b)("p",null,"Nodemon not needing to stop and restart the server."),Object(l.b)("p",null,"Node-inspector is great for debugging."),Object(l.b)("p",null,"nodemon is like a replacement for the keyword node!"),Object(l.b)("p",null,"nodemon src/app //this will start a node.js app which restarts when changes are made."),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"Interactive Debugging\nand explorative programming")),Object(l.b)("p",null,"node-debug src/app.js"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"this launches node inspector in debug mode.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"select in the body of the route to set a breakpoint.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"access in the Chrome debugger"))),Object(l.b)("p",null,"To put node-debugger and nodemon together."),Object(l.b)("p",null,"Do this:\nnode-inspector //run this by itself. Won't run the server."),Object(l.b)("p",null,"//in a seperate tab\nnodemon --debug src/app"),Object(l.b)("p",null,"You can do the same thing with the regular node command - but with no server restart"),Object(l.b)("p",null,"node --debug src/app"),Object(l.b)("p",null,"Passing the breakpoint to the nodemon comment"),Object(l.b)("p",null,"nodemon --debug-brk src/app"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"this will hit the debugger; statement.")),Object(l.b)("p",null,"QUESTIONS:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"When the debugger breaks in the application, you have access to all variables in the current application context in the browser’s console.")),Object(l.b)("p",null,"A: True"),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"What command will runs the node app in “debug” mode?")),Object(l.b)("p",null,"A: nodemon --debug src"),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"node-inspector")," can be used to run node apps directly OR to debug node apps being run in debug mode")),Object(l.b)("p",null,"A: True"),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"A breakpoint in a JavaScript application can be set by clicking on the line of a file in the browser console, or writing the ",Object(l.b)("strong",{parentName:"li"},"_")," statement directly into your code.")),Object(l.b)("p",null,"A: debugger;"),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"The following command will break the debugger on the first line")),Object(l.b)("p",null,"A: nodemon --debug-brk src/app"),Object(l.b)("p",null,"/////////////////"),Object(l.b)("p",null,"PART 3: THE REQUEST AND RESPONSE OBJECTS IN EXPRESS"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"6.  Requests and the\n    request objects\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Every route processes a request")),Object(l.b)("p",null,"So far, index AND blog route."),Object(l.b)("p",null,"The server catches the http request, then sends back as a JS request object"),Object(l.b)("p",null,"In the debug mode:"),Object(l.b)("p",null,"req.param in debug currently empty. Can run the paramter through our routes!"),Object(l.b)("p",null,"eg."),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"app.get('/blog/:id', function(req, res) {\n  res.send(post);\n});\n")),Object(l.b)("p",null,'Visiting .../blog/1 will set the id param to "1" etc'),Object(l.b)("p",null,'You can change the parameter names to be things like "title" or whatever you want.'),Object(l.b)("p",null,"QUESTIONS"),Object(l.b)("p",null,"////////////////////////"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The request object gives you access to the “hostname” where the server is serving from.")),Object(l.b)("p",null,"A: True"),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Express route parameters allow you to request different data simply by changing the ","_","_","_","_",".")),Object(l.b)("p",null,"A: URL"),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"The request object is like a JavaScript bundle of the incoming ",Object(l.b)("strong",{parentName:"li"},"_","_"))),Object(l.b)("p",null,"A: HTTP Request"),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"The request object stores route parameters in the parameters object.")),Object(l.b)("p",null,"A: False"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"7.  Responses and the\n    Response Object\n")),Object(l.b)("p",null,"The server sends back the response."),Object(l.b)("p",null,"This includes HTML and tons of behind the scenes info."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"status codes, response info etc.")),Object(l.b)("p",null,"Using the debugger:"),Object(l.b)("p",null,"res //a lot going on"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"this gives a lot of return details")),Object(l.b)("p",null,"Add a question mark makes the route param optional."),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"app.get('/blog/:title?', function(req, res) {\n  //now we can access the blog page when it is empty\n  var title = req.params.title;\n  if (title === undefined) {\n    res.send('This page is under construction');\n  } else {\n    var post = posts[title];\n    res.send(post);\n  }\n});\n")),Object(l.b)("p",null,"res.get"),Object(l.b)("p",null,"QUESTIONS"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"In express the ","_","_","_"," character at the end of a route parameter indicates that it is optional.")),Object(l.b)("p",null,"A: ?"),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Status codes can be set manually on the response object.")),Object(l.b)("p",null,"A: True"),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"The response object’s ",Object(l.b)("strong",{parentName:"li"},"_")," method is used to turn templates into HTML.")),Object(l.b)("p",null,"A: render"),Object(l.b)("p",null,"/////////////////"),Object(l.b)("p",null,"PART 4: USING TEMPLATES WITH EXPRESS"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"7.  What is Template\n    Rendering\n")),Object(l.b)("p",null,"Templates and template rendering at the core of an internet application framework."),Object(l.b)("p",null,"res.send can send things to the browser."),Object(l.b)("p",null,"Can also send back html."),Object(l.b)("p",null,"Basically a example.html that can dynamically injected"),Object(l.b)("p",null,"This templates are referred to as VIEWS."),Object(l.b)("p",null,"Popular template languages:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Handlebars"),Object(l.b)("li",{parentName:"ul"},"EJS (Embedded Javascript)"),Object(l.b)("li",{parentName:"ul"},"JADE // the most popular")),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"8.  What is Jade?\n")),Object(l.b)("p",null,"Most popular template engines for Node and Express."),Object(l.b)("p",null,"Why do they love it?"),Object(l.b)("p",null,"It quickly uses block indents for taggings."),Object(l.b)("p",null,"Examples:"),Object(l.b)("p",null,'doctype html\nhtml\nhead\ntitle Express Basics\nbody\nh1 This is an awesome HTML page, generated with Jade.\np.class1.class2.another-class //used to make classes\np.(class="test") Some content'),Object(l.b)("ol",{start:9},Object(l.b)("li",{parentName:"ol"},"Using Jade in your\nExpress App")),Object(l.b)("p",null,"How to configure your template to use Jade."),Object(l.b)("p",null,"//app.js"),Object(l.b)("p",null,"'use strict'; //throws error if you make one"),Object(l.b)("p",null,"var express = require('express'); //now can access all methods and properties of express through this.\nvar posts = require('./mock/posts.json');"),Object(l.b)("p",null,"var app = express();"),Object(l.b)("p",null,"//app variable will extended"),Object(l.b)("p",null,"//set up dev server"),Object(l.b)("p",null,"app.set('view engine', 'jade');\napp.set('views', ",Object(l.b)("strong",{parentName:"p"},"dirname + '/templates'); //"),"dirname important for different directories from where node starts"),Object(l.b)("p",null,"app.get('/', function(req, res) { //req and res are convention\nres.render('index');\n});"),Object(l.b)("p",null,"app.get('/blog/:title?', function(req, res) { //now we can access the blog page when it is empty\nvar title = req.params.title;\nif (title === undefined) {\nres.status(503); //good for bots to see this status codes\nres.send(\"This page is under construction\");\n} else {\nvar post = posts","[title]",";\nres.send(post);\n}\n});"),Object(l.b)("p",null,'app.listen(3000, function(){\nconsole.log("The frontend server is running on port 3000!");\n});'),Object(l.b)("p",null,"QUESTIONS"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"In node.js, ",Object(l.b)("inlineCode",{parentName:"li"},"__dirname")," is a variable that gives you:")),Object(l.b)("p",null,"A: The path to the current file"),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Which of the following is NOT a conventional folder name for storing templates")),Object(l.b)("p",null,"A: jade"),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In Jade's syntax, which of the following is NOT a correct assignment of the class ",Object(l.b)("inlineCode",{parentName:"p"},"nav")," to a ",Object(l.b)("inlineCode",{parentName:"p"},"div"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"The response object's ",Object(l.b)("inlineCode",{parentName:"p"},"render")," method takes the name of a template as its first parameter. The file extension (e.g. ",Object(l.b)("inlineCode",{parentName:"p"},".jade"),") is required."))),Object(l.b)("p",null,"A: False"),Object(l.b)("ol",{start:10},Object(l.b)("li",{parentName:"ol"},'The "response.render"\nMethod')),Object(l.b)("p",null,"So far, still only been using static data."),Object(l.b)("p",null,'doctype html\nhtml(lang="en")\nhead\ntitle Post Page\nbody\nsection.post\n.container.text-right\na(href="").text-faded view all\n.row\n.col-lg-8.col-lg-offset-2.text-center\nh2.section-heading I like to run!'),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"        hr.light\n\n        p.text-faded\n          | Fanny pack vinyl put a bird on it, small batch viral migas 8-bit meditation Shoreditch keytar health goth bespoke sustainable. Viral you probably haven't heard of them try-hard ennui, pug Thundercats selfies. Normcore cray health goth, umami ennui beard art party skateboard squid distillery.\n        .article\n          | Fanny pack vinyl put a bird on it, small batch viral migas 8-bit meditation Shoreditch keytar health goth bespoke sustainable. Viral you probably haven't heard of them try-hard ennui, pug Thundercats selfies. Normcore cray health goth, umami ennui beard art party skateboard squid distillery.\n")),Object(l.b)("p",null,"//app.js"),Object(l.b)("p",null,"'use strict'; //throws error if you make one"),Object(l.b)("p",null,"var express = require('express'); //now can access all methods and properties of express through this.\nvar posts = require('./mock/posts.json');"),Object(l.b)("p",null,"var app = express();"),Object(l.b)("p",null,"//app variable will extended"),Object(l.b)("p",null,"//set up dev server"),Object(l.b)("p",null,"app.set('view engine', 'jade');\napp.set('views', ",Object(l.b)("strong",{parentName:"p"},"dirname + '/templates'); //"),"dirname important for different directories from where node starts"),Object(l.b)("p",null,"app.get('/', function(req, res) { //req and res are convention\nres.render('index');\n});"),Object(l.b)("p",null,"app.get('/blog/:title?', function(req, res) { //now we can access the blog page when it is empty\nvar title = req.params.title;\nif (title === undefined) {\nres.status(503); //good for bots to see this status codes\nres.send(\"This page is under construction\");\n} else {\nvar post = posts","[title]"," || {};\nres.render('post', { post: post});\n}\n});"),Object(l.b)("p",null,'app.listen(3000, function(){\nconsole.log("The frontend server is running on port 3000!");\n});'),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"11. Scaffolding the\n    Templates\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Name your templates well"),Object(l.b)("li",{parentName:"ul"},"Helps everyone for their team")),Object(l.b)("p",null,"in the layout.jade"),Object(l.b)("p",null,"block content //add more renderhtml from here"),Object(l.b)("p",null,"To add the content from layout.jade:"),Object(l.b)("p",null,"extends ./layout.jade\nblock content //again"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"12. Adding Partials\n")),Object(l.b)("p",null,"Too much code in the layout file with the nav etc."),Object(l.b)("p",null,"Solve by moving everything in a partial called nav."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"make partials directors")),Object(l.b)("p",null,"First file will be ","_","nav.jade"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"}," - not used on its own! Sass usually uses this ")," naming convention before."),Object(l.b)("p",null,"To use partial:\ninclude ./partials/","_","nav.jade"),Object(l.b)("p",null,"QUESTIONS:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Keeping your project's views/templates folder well organized is an important part of scaling your project.")),Object(l.b)("p",null,"A: True"),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Jade uses the ",Object(l.b)("strong",{parentName:"li"},"_","_")," keyword to break chunks of content up for use across different files, or to be changed dynamically.")),Object(l.b)("p",null,"A: 'block' e.g. 'block content'"),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Partials are useful for including portions of a page like navbars and footers, that are the same, or almost the same across a number of pages.")),Object(l.b)("p",null,"A: True"),Object(l.b)("p",null,"/////////////////"),Object(l.b)("p",null,"PART 5: SERVING STATIC FILES IN EXPRESS"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"        13. Setting Up the\nExpress Static Server\nin Development\n")),Object(l.b)("p",null,"Static files: sent to client as is eg. images etc."),Object(l.b)("p",null,"public dir:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Contains other folders:\ncss\njs\nimg etc.")),Object(l.b)("p",null,"Middleware:"),Object(l.b)("p",null,"Middleware the logic on how to handle the a request in between when made by client but before it arrives at the route."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"included in Express.")),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"14. Add static to\n    the layout template\n")),Object(l.b)("p",null,"Adding styles and js is easy."),Object(l.b)("p",null,"In the head.jade template, punch through all of it."),Object(l.b)("p",null,"link() in the head.jade"),Object(l.b)("p",null,"script() in the body.jade at the end"),Object(l.b)("p",null,"Notes:"),Object(l.b)("p",null,"Convention for static files is that they're stored in public."),Object(l.b)("p",null,"/////////////////"),Object(l.b)("p",null,"PART 6: DOING MORE WITH EXPRESS"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"15. Marking Lists\n    in Jade Templates\n")),Object(l.b)("p",null,"In the blog..."),Object(l.b)("p",null,"res.render('index')"),Object(l.b)("p",null,"We need files to be in an array from the .json file."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"eg.")),Object(l.b)("p",null,"var postsLists = Object.keys(posts).map(function(value) {\nreturn posts","[value]",";\n});"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"map turns each array member into something that can have a callback function which can return the value.")),Object(l.b)("ol",{start:16},Object(l.b)("li",{parentName:"ol"},"Using logic in Jade")),Object(l.b)("p",null,"Powerful to just have one nav bar to edit and change."),Object(l.b)("p",null,"So in Jade..."),Object(l.b)("p",null,"if path === '/'\n//indent everything to be here"),Object(l.b)("p",null,"If something doesn't fit and is undefined, then it is false."),Object(l.b)("p",null,"in app.js\n//for the index"),Object(l.b)("p",null,"app.get('/', function(req, res) {\nvar path = req.path;\n//res.locals.path = path;\n//res.render('index');"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"//OR\n\nres.render('index', {path: path});\n")),Object(l.b)("p",null,"});"),Object(l.b)("p",null,"QUESTIONS"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"res.locals")," object stores")),Object(l.b)("p",null,"A: Variables that will be accessible in the template"),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"In the case of the Jade if block ",Object(l.b)("inlineCode",{parentName:"li"},"if path === '/'"),", the block's content would NOT be displayed in which of the following scenarios")),Object(l.b)("p",null,"A: /blog"),Object(l.b)("ol",{start:17},Object(l.b)("li",{parentName:"ol"},"Use Express Generator")),Object(l.b)("p",null,"We don't have to build an Express app from scratch"),Object(l.b)("p",null,"npm install -g express-generator"),Object(l.b)("p",null,"express ",Object(l.b)("inlineCode",{parentName:"p"},"<appname>")),Object(l.b)("p",null,"npm start //this is a script"),Object(l.b)("p",null,"Instead of templates, it has views"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"18. REST APIs\n")),Object(l.b)("p",null,"app.get('/posts', function(req,res) {\nif (req.query.raw) {\nres.json(posts);\n} else {\nres.json(postLists);\n}\n});"),Object(l.b)("p",null,"To allow to access as a hash:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"We can have /posts?raw=true")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/Express-Basics.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-express-basics-md-afb4e603d6ab71a9fb7d.js.map