(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{XS0X:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),o=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Conventional-Commits/Automating-Versioning.md"}});var c={_frontmatter:i},l=o.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(l,r({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"automating-versioning"},"Automating Versioning"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://medium.com/@jsilvax/automate-semantic-versioning-with-conventional-commits-d76a9f45f2fa"}),"Automate Versioning blog post"))),Object(a.b)("h2",{id:"for-local-packages"},"For local packages"),Object(a.b)("p",null,"The following is the tl;dr for getting this done."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"yarn add husky @commitlint/cli @commitlint/config-conventional standard-version --dev\n")),Object(a.b)("h2",{id:"updating-packagejson"},"Updating package.json"),Object(a.b)("p",null,"For the release script:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'"scripts" : {\n  "release" : "standard-version"\n}\n')),Object(a.b)("p",null,"For commit lint:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'"commitlint": {\n "extends": [\n   "@commitlint/config-conventional"\n ],\n "rules": {\n   "subject-case": [\n     2,\n     "never",\n     [\n       "start-case",\n       "pascal-case"\n     ]\n   ]\n }\n}\n')),Object(a.b)("p",null,"For Husky (with some examples from another project). The follow expects a generation of the ",Object(a.b)("inlineCode",{parentName:"p"},"CHANGELOG.md")," pre-push and also to run the test suite prior to deploy:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'"husky": {\n  "hooks": {\n    "pre-push": "yarn release && yarn test",\n    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"\n  }\n}\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Conventional-Commits/Automating-Versioning.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-conventional-commits-automating-versioning-md-10c022a2751ee3727634.js.map