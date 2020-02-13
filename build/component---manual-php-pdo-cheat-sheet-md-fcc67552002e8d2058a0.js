(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{"0JIb":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/PHP/pdo-cheat-sheet.md"}});var s={_frontmatter:l},p=a.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(p,o({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"pdo-help-sheet"},"PDO Help Sheet"),Object(r.b)("p",null,"// Full website list"),Object(r.b)("p",null,Object(r.b)("a",o({parentName:"p"},{href:"http://php.net/manual/en/class.pdostatement.php"}),"http://php.net/manual/en/class.pdostatement.php")),Object(r.b)("h2",{id:"setting-up-and-making-a-query"},"Setting up and making a query"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-php"}),"<?php\n\n// SET TCP/IP CONNECTION IN SEQUEL PRO TO CONNECT TO MAMP FIRST\n\n// SEQUEL PRO SETTINGS\n\n// NAME: MAMP\n// HOST: 127.0.0.1\n// USERNAME: root\n// PASSWORD: root\n// PORT: 3306\n\n$user = 'root';\n$password = 'root';\n$db = 'test-database';\n$host= 'localhost';\n\ntry {\n    $conn = new PDO(\"mysql:host=$host;dbname=$db\", $user, $password);\n    // set the PDO error mode to exception\n    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n    $sql = \"SELECT * FROM user\";\n    // use exec() because no results are returned\n    foreach($conn->query($sql) as $row){\n        echo $row['name'] . \"\\t\";\n        echo $row['email'] . \"\\t\";\n        echo $row['password'] . \"\\n\";\n    }\n}\ncatch(PDOException $e)\n    {\n    echo $sql . \"<br>\" . $e->getMessage();\n    }\n\n$conn = null;\n\n?>\n")),Object(r.b)("h2",{id:"treehouse-query-challenge"},"Treehouse Query Challenge"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-php"}),"<?php\ninclude \"helper.php\";\n\n/*\n * helper.php contains\n * $results->query(\"SELECT member_id, email, fullname, level FROM members\");\n */\n$user = $results->fetchAll(PDO::FETCH_ASSOC);\nforeach ($user as $key)\n{\n  send_offer(\n    $key['member_id'],\n    $key['email'],\n    $key['fullname'],\n    $key['level']);\n}\n?>\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/PHP/pdo-cheat-sheet.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-php-pdo-cheat-sheet-md-fcc67552002e8d2058a0.js.map