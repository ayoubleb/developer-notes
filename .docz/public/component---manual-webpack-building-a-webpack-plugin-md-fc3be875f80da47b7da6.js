(window.webpackJsonp=window.webpackJsonp||[]).push([[559],{TdHs:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),l=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Webpack/Building-A-Webpack-Plugin.md"}});var r={_frontmatter:i},c=l.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(o.b)(c,a({},r,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"building-a-webpack-plugin"},"Building A Webpack Plugin"),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",a({parentName:"li"},{href:"https://dev.to/royal_bhati/write-your-first-webpack-plugin-20fh"}),"This DEV.to article on removing logs using a plugin"))),Object(o.b)("h2",{id:"building-a-plugin-to-compile-tokens"},"Building A Plugin To Compile Tokens"),Object(o.b)("p",null,"This project enables us to look for ",Object(o.b)("inlineCode",{parentName:"p"},".tokens.json")," files and compile the file tokens that we want."),Object(o.b)("h2",{id:"hello-world"},"Hello, World!"),Object(o.b)("p",null,"Touch a new file to use for the plugin. Below is an example taken from resource (1)."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"//logRemover.ts\n\nmodule.exports = class RemoveLogs {\n  // not needed but can be used for params taken by plugin\n  constructor(options) {\n    this.options = options;\n  }\n\n  apply(compiler) {\n    console.log('Hello from the new plugin');\n  }\n};\n")),Object(o.b)("p",null,"In our example, we just need the following:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"module.exports = class CompileDesignTokens {\n  apply(compiler) {\n    console.log('Hello from the new plugin');\n  }\n};\n")),Object(o.b)("p",null,"[TODO: Finish example (Jan 8th 2020)]"))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Webpack/Building-A-Webpack-Plugin.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-webpack-building-a-webpack-plugin-md-fc3be875f80da47b7da6.js.map