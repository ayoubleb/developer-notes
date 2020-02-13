(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{jrpJ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var l=n("/FXl"),a=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Webpack/Webpack-Optimisation.md"}});var r={_frontmatter:o},b=a.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(l.b)(b,i({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"webpack-optimisation"},"Webpack Optimisation"),Object(l.b)("h2",{id:"loader-targeting"},"Loader targeting"),Object(l.b)("p",null,"Apply loaders to the minimal number of modules necessary."),Object(l.b)("pre",null,Object(l.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// instead of...\nmodule.exports = {\n  //...\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        loader: 'babel-loader'\n      }\n    ]\n  }\n};\n\n// try using the include target\nmodule.exports = {\n  //...\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        include: path.resolve(__dirname, 'src'),\n        loader: 'babel-loader'\n      }\n    ]\n  }\n};\n")),Object(l.b)("h2",{id:"bootstrap"},"Bootstrap"),Object(l.b)("p",null,"Each additional loader/plugin has a bootup time. Try to use as few tools as possible."),Object(l.b)("h2",{id:"resolving"},"Resolving"),Object(l.b)("p",null,"The following can increase resolving speed:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Minimize the number of items in ",Object(l.b)("inlineCode",{parentName:"li"},"resolve.modules"),", ",Object(l.b)("inlineCode",{parentName:"li"},"resolve.extensions"),", ",Object(l.b)("inlineCode",{parentName:"li"},"resolve.mainFiles"),", ",Object(l.b)("inlineCode",{parentName:"li"},"resolve.descriptionFiles"),", as they increase the number of filesystem calls."),Object(l.b)("li",{parentName:"ul"},"Set ",Object(l.b)("inlineCode",{parentName:"li"},"resolve.symlinks: false")," if you don't use symlinks (eg ",Object(l.b)("inlineCode",{parentName:"li"},"npm link")," or ",Object(l.b)("inlineCode",{parentName:"li"},"yarn link"),")."),Object(l.b)("li",{parentName:"ul"},"Set ",Object(l.b)("inlineCode",{parentName:"li"},"resolve.cacheWithContext: false")," if you use custom resolving plugins, that are not context specific.")),Object(l.b)("h2",{id:"dlls"},"Dlls"),Object(l.b)("p",null,"Use the ",Object(l.b)("inlineCode",{parentName:"p"},"DllPlugin")," to move code that is changes less frequently into a separate compilation. This will improve app compilation speed, although it does increase complexity of the build process."),Object(l.b)("h2",{id:"smaller--faster"},"Smaller = Faster"),Object(l.b)("p",null,"Decrease the total size of the compilation to increase build performance. Try to keep chunks small."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Use fewer/smaller libs"),Object(l.b)("li",{parentName:"ul"},"Use the ",Object(l.b)("inlineCode",{parentName:"li"},"SplitChunksPlugin")," in Multi-Page Applications"),Object(l.b)("li",{parentName:"ul"},"Use the ",Object(l.b)("inlineCode",{parentName:"li"},"SplitChunksPlugin")," in ",Object(l.b)("inlineCode",{parentName:"li"},"async")," mode in Multi-Page Applications"),Object(l.b)("li",{parentName:"ul"},"Remove unused code"),Object(l.b)("li",{parentName:"ul"},"Only compile the part of the code you are currently developing on")),Object(l.b)("h2",{id:"worker-pool"},"Worker Pool"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"thread-loader")," can be used to offload expensive loaders to a worker pool."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Don't use too many loaders. There is a boot overhead for the Node.js runtime and the loader. Minimize the module transfers between worker and main process. IPC is expensive.")),Object(l.b)("h2",{id:"persistent-cache"},"Persistent Cache"),Object(l.b)("p",null,"Enable persistent caching with the ",Object(l.b)("inlineCode",{parentName:"p"},"cache-loader"),'. Clear cache directory on "postinstall" in ',Object(l.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(l.b)("h2",{id:"custom-pluginsloaders"},"Custom plugins/loaders"),Object(l.b)("p",null,"Profile them to not introduce a performance problem here."),Object(l.b)("h2",{id:"incremental-builds"},"Incremental Builds"),Object(l.b)("p",null,"Use watch mode. Specifically Webpack's."),Object(l.b)("p",null,"If CPU overloads due to poling mode, you can increase the polling interval with ",Object(l.b)("inlineCode",{parentName:"p"},"watchOptions.poll"),"."),Object(l.b)("h2",{id:"compile-in-memory"},"Compile in Memory"),Object(l.b)("p",null,"Following utils improve performance by compilin and serving assets in memory rather than writing to disk:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"webpack-dev-server")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"webpack-hot-middleware")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"webpack-dev-middleware"))),Object(l.b)("h2",{id:"devtool"},"Devtool"),Object(l.b)("p",null,"Be aware of the performance differences between the different devtool settings."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'"eval" has the best performance, but doesn\'t assist you for transpiled code.'),Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"cheap-source-map")," variants are more performant if you can live with the slightly worse mapping quality."),Object(l.b)("li",{parentName:"ul"},"Use a ",Object(l.b)("inlineCode",{parentName:"li"},"eval-source-map")," variant for incremental builds.\n=> In most cases, ",Object(l.b)("inlineCode",{parentName:"li"},"cheap-module-eval-source-map")," is the best option.")),Object(l.b)("p",null,"[TO FINISH => up to https://webpack.js.org/guides/build-performance/#minimal-entry-chunk]"))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Webpack/Webpack-Optimisation.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-webpack-webpack-optimisation-md-80a667ce716bcce42560.js.map