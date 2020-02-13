(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{YxRB:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return a}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),i=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Google-Cloud-Platform/Cloud-Vision-Nodejs.md"}});var c={_frontmatter:s},l=i.a;function a(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(o.b)(l,r({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"cloud-vision-w-nodejs"},"Cloud Vision w/ Nodejs"),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://cloud.google.com/vision/docs/ocr#vision_text_detection-nodejs"}),"https://cloud.google.com/vision/docs/ocr#vision_text_detection-nodejs"))),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Ensure you have set up a GCP project with Cloud Vision enabled. Follow the link above if you need help."),Object(o.b)("p",null,"Move the project creds to the right directory and install ",Object(o.b)("inlineCode",{parentName:"p"},"@google-cloud/vision")," for the project."),Object(o.b)("h2",{id:"typescript-example"},"TypeScript Example"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"// src/index.ts\nconst vision = require('@google-cloud/vision');\nconst util = require('util');\nconst ss = require('string-similarity');\nconst cc = require('lodash.camelcase');\nconst up = require('lodash.capitalize');\nconst path = require('path');\n\nconst components: string[] = [\n  'Select',\n  'Text',\n  'Button',\n  'TextField',\n  'Image',\n  'Icon',\n];\n\nconst run = async () => {\n  // Creates a client\n  const client = new vision.ImageAnnotatorClient();\n\n  // Base file required for the src folder detection\n  const fileName = './src/img/testFour.jpg';\n\n  // Performs text detection on the local file\n  const [result] = await client.textDetection(fileName);\n  const detections = result.textAnnotations;\n  console.log('=== STARTING ===');\n  const fullDetection = detections[0];\n  const { description } = fullDetection;\n\n  console.log('Description:', description);\n\n  let res = '';\n\n  description.split('\\n').map((line: string) => {\n    res += '<div>\\n';\n    line.split(',').map((text) => {\n      const { bestMatch } = ss.findBestMatch(up(cc(text)), components);\n      res += `\\t<${bestMatch.target} />\\n`;\n    });\n    res += '</div>\\n';\n  });\n  console.log('=== RES ===');\n  console.log(res);\n};\n\nrun();\n")),Object(o.b)("p",null,"Running ",Object(o.b)("inlineCode",{parentName:"p"},"node --require ts-node/register src/index.ts")," should result in the output we want."))}a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Google-Cloud-Platform/Cloud-Vision-Nodejs.md"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-google-cloud-platform-cloud-vision-nodejs-md-84beafb5bd1a532ecb1c.js.map