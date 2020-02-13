(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{gO9A:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return h}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Algorithms/LRU-Caches.md"}});var s={_frontmatter:o},i=r.a;function h(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,c({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lru-caches"},"LRU Caches"),Object(a.b)("h2",{id:"question"},"Question"),Object(a.b)("p",null,"Have the function LRUCache(strArr) take the array of characters stored in strArr, which will contain characters ranging from A to Z in some arbitrary order, and determine what elements still remain in a virtual cache that can hold up to 5 elements with an LRU cache algorithm implemented. For example: if strArr is ",'["A", "B", "C", "D", "A", "E", "D", "Z"]',", then the following steps are taken:"),Object(a.b)("p",null,"(1) A does not exist in the cache, so access it and store it in the cache.\n(2) B does not exist in the cache, so access it and store it in the cache as well. So far the cache contains: ",'["A", "B"]',".\n(3) Same goes for C, so the cache is now: ",'["A", "B", "C"]',".\n(4) Same goes for D, so the cache is now: ",'["A", "B", "C", "D"]',".\n(5) Now A is accessed again, but it exists in the cache already so it is brought to the front: ",'["B", "C", "D", "A"]',".\n(6) E does not exist in the cache, so access it and store it in the cache: ",'["B", "C", "D", "A", "E"]',".\n(7) D is accessed again so it is brought to the front: ",'["B", "C", "A", "E", "D"]',".\n(8) Z does not exist in the cache so add it to the front and remove the least recently used element: ",'["C", "A", "E", "D", "Z"]',"."),Object(a.b)("p",null,"Now the caching steps have been completed and your program should return the order of the cache with the elements joined into a string, separated by a hyphen. Therefore, for the example above your program should return C-A-E-D-Z."),Object(a.b)("p",null,"Use the Parameter Testing feature in the box below to test your code with different arguments."),Object(a.b)("h2",{id:"answer"},"Answer"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"function LRUCache(strArr) {\n  let cache = [];\n\n  for (let char of strArr) {\n    // handle exists in cache\n    if (cache.includes(char)) {\n      cache.splice(cache.indexOf(char), 1);\n    } else if (cache.length >= 5) {\n      // unshift first el and apped\n      cache.shift();\n    }\n\n    cache.push(char);\n  }\n\n  // code goes here\n  return cache.join('-');\n}\n")))}h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Algorithms/LRU-Caches.md"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-algorithms-lru-caches-md-099427a80cc468aaf2b8.js.map