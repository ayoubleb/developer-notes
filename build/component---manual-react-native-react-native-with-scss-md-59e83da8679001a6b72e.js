(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{pZAg:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),i=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React-Native/React-Native-With-SCSS.md"}});var c={_frontmatter:r},s=i.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(s,o({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"react-native-with-css-and-scss"},"React Native with CSS and SCSS"),Object(a.b)("h2",{id:"react-native-to-cssscss-node-package"},"React Native to CSS/SCSS Node Package"),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/sabeurthabti/react-native-css"}),"This is the link to the package")),Object(a.b)("p",null,"This package converts css/scss to a .js file that we can use in the react-native component/container files."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Instructions")),Object(a.b)("p",null,"Install globally ",Object(a.b)("inlineCode",{parentName:"p"},"npm install react-native-css -g")),Object(a.b)("p",null,"Now we can run ",Object(a.b)("inlineCode",{parentName:"p"},"react-native-css -i INPUT_CSS_FILE -o OUTPUT_JS_FILE --watch")," - check the .md"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"! IMPORTANT: Rules for the SASS File")),Object(a.b)("p",null,"The target classes ",Object(a.b)("em",{parentName:"p"},"NEED be written in camel case")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Basic Example: style.css")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),".container {\n        margin-top: 75;\n        align-items: center;\n}\n\n.image {\n    width: 107;\n    height: 165;\n    padding: 10;\n}\n\n.descriptionCamelCaseExample {\n    padding: 10;\n    font-size: 25;\n    color: #656565;\n}\n")),Object(a.b)("p",null,"If we run ",Object(a.b)("inlineCode",{parentName:"p"},"react-native-css -i ./style.css -o ./style.js --watch")),Object(a.b)("p",null,"The following will be in style.js"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),'module.exports = require(\'react-native\').StyleSheet.create({    \n    "container": {\n        "marginTop":75,\n        "alignItems":"center"\n        },\n    "image": {\n        "width":107,\n        "height":165,\n        "padding":10\n        },\n    "descriptionCamelCaseExample": {\n        "padding":10,\n        "fontSize":25,\n        "color":"#656565"}\n    });\n')),Object(a.b)("p",null,"In the respective component js file, you will now need to import this."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"'use strict';\n\n// var React = require('react-native');\nimport React, { Component } from 'react';\nimport styles from './style.js';\n\nimport {\n    StyleSheet,\n    Text,\n    View,\n    Image\n} from 'react-native';\n\nclass ExampleComponentOrContainer extends Component {\n    render() {\n\n        // example variable declarations\n        // not directly relevant to explanation\n        var book = this.props.book;\n        var imageURI = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';\n        var description = (typeof book.volumeInfo.description !== 'undefined') ? book.volumeInfo.description : '';\n\n        return (\n\n            // use style = {styles.<class>}\n            // to apply the styles\n\n            <View style={styles.container}>\n                <Image style={styles.image} source={{uri: imageURI}} />\n                <Text style={styles.descriptionCamelCaseExample}>{description}</Text>\n            </View>\n        );\n    }\n}\n\nexport { BookDetail };\n")),Object(a.b)("p",null,"Happy days!"))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React-Native/React-Native-With-SCSS.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-native-react-native-with-scss-md-59e83da8679001a6b72e.js.map