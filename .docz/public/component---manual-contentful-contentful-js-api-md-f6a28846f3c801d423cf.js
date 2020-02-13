(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{sxuW:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Contentful/Contentful-JS-API.md"}});var o={_frontmatter:i},s=a.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(s,c({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"contentful-js-api"},"Contentful JS API"),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{className:"language-shell"}),"yarn add contentful\n")),Object(r.b)("h2",{id:"quickstart"},"Quickstart"),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file with following values:"),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{className:"language-shell"}),"CONTENTFUL_SPACE_ID=FILL_IN\nCONTENTFUL_API_KEY=FILL_IN\n")),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"require('dotenv').config();\nconst contentful = require('contentful');\nconst fs = require('fs-extra');\n\nvar client = contentful.createClient({\n  space: process.env.CONTENTFUL_SPACE_ID,\n  accessToken: process.env.CONTENTFUL_API_KEY\n});\n\nclient.getEntries().then(function(entries) {\n  const obj = {};\n  // log the title for all the entries that have it\n  entries.items.forEach(function(entry) {\n    console.log(entry.fields);\n  });\n\n  fs.writeJsonSync('./data.json', entries);\n});\n")),Object(r.b)("h2",{id:"getting-specific-entries"},"Getting specific entries"),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"require('dotenv').config();\nconst contentful = require('contentful');\nconst fs = require('fs-extra');\n\nvar client = contentful.createClient({\n  space: process.env.CONTENTFUL_SPACE_ID,\n  accessToken: process.env.CONTENTFUL_API_KEY\n});\n\n// example content type could be a blog post etc\nclient\n  .getEntries({\n    'fields.sku': '<sku_value>',\n    content_type: '<product_content_type_id>'\n  })\n  .then(function(entries) {\n    entries.items.forEach(function(entry) {\n      console.log(JSON.stringify(entry.fields.sku));\n    });\n  });\n")),Object(r.b)("h2",{id:"structure"},"Structure"),Object(r.b)("p",null,"The importantant part of the recursive structure is that each field that requires another type is place under the ",Object(r.b)("inlineCode",{parentName:"p"},"fields")," JSON type."))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Contentful/Contentful-JS-API.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-contentful-contentful-js-api-md-f6a28846f3c801d423cf.js.map