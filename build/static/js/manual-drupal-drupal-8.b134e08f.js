(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{"./manual/Drupal/Drupal-8.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o={},l="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(l,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"drupal-8"},"Drupal 8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#drupal-8"}),"Drupal 8"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#installation"}),"Installation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#basics-of-content-creation"}),"Basics of Content Creation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#publishing-options---published-promoted-url"}),"Publishing Options - Published, Promoted, URL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#5-simple-site---content"}),"5. Simple Site - Content")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#8-extending-drupal"}),"8. Extending Drupal"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#core-modules"}),"Core Modules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#forum-module"}),"Forum module")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#finding-modules"}),"Finding modules")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#9-creating-a-site---content-types"}),"9. Creating a site - Content Types"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#updating-an-existing-content-type"}),"Updating an existing content type")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#changing-how-the-content-type-displays"}),"Changing how the content type displays")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#create-a-new-content-type---event"}),"Create a new content type - Event"))))))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Download Drupal: ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.drupal.org/download"}),"https://www.drupal.org/download")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Save the contents at the base of your new repo/directory i.e. so the url will be ",Object(i.b)("inlineCode",{parentName:"li"},"localhost/YOUR_DIRECTORY/DRUPAL-CONTENT/"))),Object(i.b)("p",null,"Go to ",Object(i.b)("inlineCode",{parentName:"p"},"localhost/YOUR_DIRECTORY/DRUPAL-CONTENT/")," and follow the prompts\nYou also need to run ",Object(i.b)("inlineCode",{parentName:"p"},"composer install")," from your sites root directory."),Object(i.b)("h2",{id:"basics-of-content-creation"},"Basics of Content Creation"),Object(i.b)("p",null,"What we deal with out-of-the-box. Content entry being the most important."),Object(i.b)("p",null,"Using ",Object(i.b)("inlineCode",{parentName:"p"},"Content > Add content")," to get a list of content that we can add."),Object(i.b)("p",null,"If we create a page ",Object(i.b)("inlineCode",{parentName:"p"},"About")," and change the settings on the right hand side, we can also begin to add tables for quick access."),Object(i.b)("h2",{id:"publishing-options---published-promoted-url"},"Publishing Options - Published, Promoted, URL"),Object(i.b)("p",null,"If we create an article without the default settings, we can then use ",Object(i.b)("inlineCode",{parentName:"p"},"saved as unpublished")," from the save and publish dropdown. If content is not published, you'll be redirected to a login from a private browser and not allowed to use."),Object(i.b)("p",null,"On the right-hand side options, we can also edit things out of the box such as comments, the url path, author info, promotion options as well as the previously explored comment settings. Promotion options also allow you to deal with ",Object(i.b)("inlineCode",{parentName:"p"},"sticky-at-top-of-list"),"."),Object(i.b)("h2",{id:"5-simple-site---content"},"5. Simple Site - Content"),Object(i.b)("h2",{id:"8-extending-drupal"},"8. Extending Drupal"),Object(i.b)("h3",{id:"core-modules"},"Core Modules"),Object(i.b)("p",null,"Two types: ",Object(i.b)("inlineCode",{parentName:"p"},"core")," and ",Object(i.b)("inlineCode",{parentName:"p"},"contributed"),". Contributed is given back from the community. It's not maintained by the community."),Object(i.b)("p",null,"Under the ",Object(i.b)("inlineCode",{parentName:"p"},"manage > extend")," tab, you can manage the modules. Selecting them on or off and seeing more information is available from here."),Object(i.b)("p",null,"Extra configuration may be available from the accordian dropdown."),Object(i.b)("h3",{id:"forum-module"},"Forum module"),Object(i.b)("p",null,"You can also manage permissions from the ",Object(i.b)("inlineCode",{parentName:"p"},"people")," section. If you have modules installed, you can see from the accordian dropdown what is required for it to work."),Object(i.b)("p",null,"If modules themselves are enabled, they may become directly available on the ",Object(i.b)("inlineCode",{parentName:"p"},"content")," menu."),Object(i.b)("h3",{id:"finding-modules"},"Finding modules"),Object(i.b)("p",null,"We can search drupal.org and search for modules."),Object(i.b)("h2",{id:"9-creating-a-site---content-types"},"9. Creating a site - Content Types"),Object(i.b)("h3",{id:"updating-an-existing-content-type"},"Updating an existing content type"),Object(i.b)("p",null,"What happens if we want to add a field for articles if we want to add photo credit? If you are building a site for someone else, take them into account."),Object(i.b)("p",null,"From ",Object(i.b)("inlineCode",{parentName:"p"},"Structure > Content Type")," you can select the ",Object(i.b)("inlineCode",{parentName:"p"},"Manage fields")," dropdown to edit existing types and what we can easily view. To add something such as a new field, we need to ",Object(i.b)("inlineCode",{parentName:"p"},"manage fields"),"."),Object(i.b)("p",null,"As we update the field names, we can see the ",Object(i.b)("inlineCode",{parentName:"p"},"machine name")," on the left updating - this is important for the database itself."),Object(i.b)("p",null,"The next step is asking for global settings themselves."),Object(i.b)("p",null,"Next, we can add help text, add ",Object(i.b)("inlineCode",{parentName:"p"},"required")," and a default value."),Object(i.b)("h3",{id:"changing-how-the-content-type-displays"},"Changing how the content type displays"),Object(i.b)("p",null,"From ",Object(i.b)("inlineCode",{parentName:"p"},"Structure > Content Type"),", we can change the display."),Object(i.b)("h3",{id:"create-a-new-content-type---event"},"Create a new content type - Event"))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Drupal/Drupal-8.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-drupal-drupal-8.101a1afd2417ec7a4a77.js.map