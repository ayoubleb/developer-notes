(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{"./manual/PHP/pdo-cheat-sheet.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return i});var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function c(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var i=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,u(n).call(this,e))).layout=null,t}var t,o,p;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;s(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"pdo-help-sheet"}},"PDO Help Sheet"),r.a.createElement(a.MDXTag,{name:"p",components:n},"// Full website list"),r.a.createElement(a.MDXTag,{name:"p",components:n},r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://php.net/manual/en/class.pdostatement.php"}},"http://php.net/manual/en/class.pdostatement.php")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"setting-up-and-making-a-query"}},"Setting up and making a query"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-php"}},"<?php\n\n// SET TCP/IP CONNECTION IN SEQUEL PRO TO CONNECT TO MAMP FIRST\n\n// SEQUEL PRO SETTINGS\n\n// NAME: MAMP\n// HOST: 127.0.0.1\n// USERNAME: root\n// PASSWORD: root\n// PORT: 3306\n\n$user = 'root';\n$password = 'root';\n$db = 'test-database';\n$host= 'localhost';\n\ntry {\n    $conn = new PDO(\"mysql:host=$host;dbname=$db\", $user, $password);\n    // set the PDO error mode to exception\n    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n    $sql = \"SELECT * FROM user\";\n    // use exec() because no results are returned\n    foreach($conn->query($sql) as $row){\n        echo $row['name'] . \"\t\";\n        echo $row['email'] . \"\t\";\n        echo $row['password'] . \"\n\";\n    }\n}\ncatch(PDOException $e)\n    {\n    echo $sql . \"<br>\" . $e->getMessage();\n    }\n\n$conn = null;\n\n?>\n")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"treehouse-query-challenge"}},"Treehouse Query Challenge"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-php"}},"<?php\ninclude \"helper.php\";\n\n/*\n * helper.php contains\n * $results->query(\"SELECT member_id, email, fullname, level FROM members\");\n */\n$user = $results->fetchAll(PDO::FETCH_ASSOC);\nforeach ($user as $key)\n{\n  send_offer(\n    $key['member_id'],\n    $key['email'],\n    $key['fullname'],\n    $key['level']);\n}\n?>\n")))}}])&&c(t.prototype,o),p&&c(t,p),n}();i.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-php-pdo-cheat-sheet.305817e8304de77c75ce.js.map