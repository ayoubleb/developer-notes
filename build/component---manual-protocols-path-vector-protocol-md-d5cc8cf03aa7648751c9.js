(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{a0HH:function(t,e,o){"use strict";o.r(e),o.d(e,"_frontmatter",(function(){return i})),o.d(e,"default",(function(){return h}));o("1c7q"),o("abGl"),o("gZHo"),o("Fdmb"),o("Ir+3"),o("2mQt"),o("mXGw");var n=o("/FXl"),r=o("TjRS");o("aD51");function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Protocols/Path-Vector-Protocol.md"}});var s={_frontmatter:i},c=r.a;function h(t){var e=t.components,o=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,["components"]);return Object(n.b)(c,a({},s,o,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"path-vector-protocol"},"Path Vector Protocol"),Object(n.b)("p",null,'A path vector protocol is a network routing protocol which maintains the path information that gets updated dynamically. Updates which have looped through the network and returned to the same node are easily detected and discarded. This algorithm is sometimes used in Bellman–Ford routing algorithms to avoid "Count to Infinity" problems.'),Object(n.b)("p",null,"It is different from the distance vector routing and link state routing. Each entry in the routing table contains the destination network, the next router and the path to reach the destination."),Object(n.b)("p",null,"Border Gateway Protocol (BGP) is an example of a path vector protocol. In BGP, the autonomous system boundary routers (ASBR) send path vector messages to advertise the reachability of networks. Each router that receives a path vector message must verify the advertised path according to its policy. If the message complies with its policy, the router modifies its routing table and the message before sending the message to the next neighbor. It modifies the routing table to maintain the autonomous systems that are traversed in order to reach the destination system. It modifies the message to add its AS number and to replace the next router entry with its identification."))}h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Protocols/Path-Vector-Protocol.md"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-protocols-path-vector-protocol-md-d5cc8cf03aa7648751c9.js.map