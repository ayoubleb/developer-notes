(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{Cg9b:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),o=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Storybook/webpack-sass.md"}});var i={_frontmatter:s},c=o.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(c,a({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"adding-sass-to-webpack"},"Adding SASS to Webpack"),Object(r.b)("h2",{id:"steps"},"Steps"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install the appropraite npm packages"),Object(r.b)("li",{parentName:"ol"},"Eject create-react-app"),Object(r.b)("li",{parentName:"ol"},"Update ",Object(r.b)("inlineCode",{parentName:"li"},"webpack.config")," (check webpack.config)")),Object(r.b)("h3",{id:"step-one"},"Step One"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{}),"yarn add sass-loader node-sass-magic-importer resolve-url-loader node-sass --dev\n")),Object(r.b)("h3",{id:"step-two"},"Step Two"),Object(r.b)("p",null,"Ensure you have updated git first."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{}),"npm run eject\n")),Object(r.b)("h3",{id:"step-three"},"Step Three"),Object(r.b)("p",null,"Make sure you exclude .scss from the file-loader."),Object(r.b)("p",null,"Example for ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.dev.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"// Top of the file\nconst magicImporter = require('node-sass-magic-importer');\n\n...\n\n{\n    test: /\\.scss$/,\n    use: [\n        require.resolve('style-loader'),\n        {\n            loader: require.resolve('css-loader'),\n            options: {\n                importLoaders: 1,\n                sourceMap: true\n            }\n        },\n        {\n            loader: require.resolve('postcss-loader'),\n            options: {\n                // Necessary for external CSS imports to work\n                // https://github.com/facebookincubator/create-react-app/issues/2677\n                ident: 'postcss',\n                plugins: () => [\n                    require('postcss-flexbugs-fixes'),\n                    autoprefixer({\n                        browsers: [\n                            '>1%',\n                            'last 4 versions',\n                            'Firefox ESR',\n                            'not ie < 9' // React doesn't support IE8 anyway\n                        ],\n                        flexbox: 'no-2009'\n                    })\n                ],\n                sourceMap: true\n            }\n        },\n        require.resolve('resolve-url-loader'),\n        {\n            loader: 'sass-loader',\n            options: {\n                importer: magicImporter(),\n                sourceMap: true\n            }\n        }\n    ]\n}\n...\n")),Object(r.b)("p",null,"Example for ",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.prod.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"...\n{\n    test: /\\.scss$/,\n    loader: ExtractTextPlugin.extract(\n        Object.assign(\n            {\n                fallback: require.resolve('style-loader'),\n                use: [\n                    {\n                        loader: require.resolve('css-loader'),\n                        options: {\n                            importLoaders: 1,\n                            minimize: true,\n                            sourceMap: true\n                        }\n                    },\n                    {\n                        loader: require.resolve('postcss-loader'),\n                        options: {\n                            // Necessary for external CSS imports to work\n                            // https://github.com/facebookincubator/create-react-app/issues/2677\n                            ident: 'postcss',\n                            plugins: () => [\n                                require('postcss-flexbugs-fixes'),\n                                autoprefixer({\n                                    browsers: [\n                                        '>1%',\n                                        'last 4 versions',\n                                        'Firefox ESR',\n                                        'not ie < 9' // React doesn't support IE8 anyway\n                                    ],\n                                    flexbox: 'no-2009'\n                                })\n                            ]\n                        }\n                    },\n                    require.resolve('resolve-url-loader'),\n                    {\n                        loader: 'sass-loader',\n                        options: {\n                            importer: magicImporter()\n                        }\n                    }\n                ]\n            },\n            extractTextPluginOptions\n        )\n    )\n    // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.\n}\n...\n")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Storybook/webpack-sass.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-storybook-webpack-sass-md-78e5058f8c14b76e1651.js.map