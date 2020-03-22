(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./manual/Algorithms/Longest-Word.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),s={},a="wrapper";function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(a,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"longest-word"},"Longest Word"),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://www.coderbyte.com/editor/Longest%20Word:JavaScript"}),"CoderByte"))),Object(o.b)("h2",{id:"question"},"Question"),Object(o.b)("p",null,"Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'Input: "fun&!! time"\nOutput: time\n')),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'Input: "I love dogs"\nOutput: love\n')),Object(o.b)("h2",{id:"answer"},"Answer"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"function LongestWord(sen) {\n  const words = sen.split(' ');\n  let maxWord = '';\n  let max = 0;\n\n  for (let word of words) {\n    const filteredWord = word.replace(/[^a-zA-Z0-9]/gi, '');\n    if (filteredWord.length > max) {\n      maxWord = filteredWord;\n      max = filteredWord.length;\n    }\n  }\n\n  // code goes here\n  return maxWord;\n}\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/Longest-Word.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-algorithms-longest-word.101a1afd2417ec7a4a77.js.map