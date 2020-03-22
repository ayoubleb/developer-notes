(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{"./manual/Kotlin/Kotlin-Examples.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),r={},s="wrapper";function b(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(a.b)(s,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"kotlin-examples"},"Kotlin Examples"),Object(a.b)("h2",{id:"plus-minus"},"Plus Minus"),Object(a.b)("p",null,"Input:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"6\n-4 3 -9 0 4 1\n")),Object(a.b)("p",null,"Output:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"0.500000\n0.333333\n0.166667\n")),Object(a.b)("p",null,"Prints positive, negative and zeroes."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"fun plusMinus(arr: Array<Int>): Unit {\n    var positive = 0\n    var negative = 0\n    var zeroes = 0\n\n    for (i in arr) {\n        when {\n            i > 0 -> positive++\n            i < 0 -> negative++\n            else -> zeroes++\n        }\n    }\n\n    println(1.0 / arr.size * positive)\n    println(1.0 / arr.size * negative)\n    println(1.0 / arr.size * zeroes)\n}\n")),Object(a.b)("h2",{id:"nullable-types"},"Nullable Types"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"var errorCode: Int?\n\nerrorCode = 100\n// or for null\nerrorCode = null\n")),Object(a.b)("p",null,"Note that treating nullable types from non-nullable types will have unusual repercussions:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"var result: Int? = 30\nprintln(result) // 30\n\nprintln(result + 1) // throws error \"Operator call corresponds to a dot-qualified call 'result.plus(1)' which is not allowed on a nullable receiver 'result'.\"\n")),Object(a.b)("h3",{id:"unwrapping-nullable-values"},"Unwrapping nullable values"),Object(a.b)("p",null,"There are two different methods you can use to remove these nullables from the box. The first is using the not-null assertion operator !! (use these sparingly):"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),'val ageAfterBirthday = authorAge!! + 1\nprintln("After their next birthday, author will bne $ageAfterBirthday") // prints as expected\n')),Object(a.b)("h3",{id:"smart-casts"},"Smart Casts"),Object(a.b)("p",null,"This is the second way to go about it."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"var nonNullableAuthor: String\nvar nullableAuthor: String?\nif (authorName != null) {\n  nonNullableAuthor = authorName\n} else {\n  nullableAuthor = authorName\n}\n")),Object(a.b)("h3",{id:"safe-calls"},"Safe Calls"),Object(a.b)("p",null,"Using the ",Object(a.b)("inlineCode",{parentName:"p"},"?.")," operator:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"val nameLength = authorName?.length\nprintln(\"Author's name has length $nameLength.\")\n// > Author's name has length 10.\n")),Object(a.b)("h3",{id:"let-function"},"let() function"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"authorName?.let {\n  nonNullableAuthor = authorName\n}\n")),Object(a.b)("h3",{id:"elvis-operator"},"Elvis Operator"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"var nullableInt: Int? = 10\nvar mustHaveResult = nullableInt ?: 0\n")),Object(a.b)("p",null,"The following is equivalent:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"// this...\nvar nullableInt: Int? = 10\nvar mustHaveResult = if (nullableInt != null) nullableInt else 0\n\n// ...is the same as this\nnullableInt = null\nmustHaveResult = nullableInt ?: 0\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Kotlin/Kotlin-Examples.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-kotlin-kotlin-examples.101a1afd2417ec7a4a77.js.map