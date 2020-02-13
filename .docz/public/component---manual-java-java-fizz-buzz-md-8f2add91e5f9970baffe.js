(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{"Sc/A":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return u})),t.d(n,"default",(function(){return z}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),i=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Java/Java-Fizz-Buzz.md"}});var s={_frontmatter:u},l=i.a;function z(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(l,r({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"fizz-buzz-in-java"},"Fizz Buzz in Java"),Object(a.b)("h2",{id:"gradle-setup"},"Gradle setup"),Object(a.b)("p",null,"For our ",Object(a.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-gradle"}),'apply plugin: "java"\napply plugin: "eclipse"\napply plugin: "idea"\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    testCompile "junit:junit:4.12"\n}\ntest {\n    testLogging {\n        exceptionFormat = \'full\'\n        events = ["passed", "failed", "skipped"]\n    }\n}\n')),Object(a.b)("h2",{id:"setting-up-the-tests"},"Setting up the Tests"),Object(a.b)("p",null,"Create file ",Object(a.b)("inlineCode",{parentName:"p"},"src/test/java/FizzBuzzTest.java"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-java"}),'import org.junit.Ignore;\nimport org.junit.Test;\n\nimport static org.junit.Assert.assertEquals;\n\npublic class FizzBuzzTest {\n    @Test\n    public void testReturnsIntAsString() {\n        assertEquals("2", new FizzBuzz().run(2));\n    }\n\n    // @Ignore("Remove to run test")\n    @Test\n    public void testReturnsFizz() {\n        assertEquals("Fizz", new FizzBuzz().run(3));\n    }\n\n    @Test\n    public void testReturnsBuzz() {\n        assertEquals("Buzz", new FizzBuzz().run(5));\n    }\n\n    @Test\n    public void testReturnsFizzBuzz() {\n        assertEquals("FizzBuzz", new FizzBuzz().run(15));\n    }\n}\n')),Object(a.b)("h2",{id:"srcmainjavafizzbuzzjava"},"src/main/java/FizzBuzz.java"),Object(a.b)("p",null,"For our main Java file running FizzBuzz:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-java"}),'class FizzBuzz {\n    String run(Integer input) {\n        if (input % 15 == 0) {\n            return "FizzBuzz";\n        } else if (input % 3 == 0) {\n            return "Fizz";\n        } else if (input % 5 == 0) {\n            return "Buzz";\n        } else {\n            return Integer.toString(input);\n        }\n    }\n}\n')),Object(a.b)("h2",{id:"running-tests"},"Running tests"),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"gradle test")," to compile and test our FizzBuzz class."))}z&&z===Object(z)&&Object.isExtensible(z)&&!z.hasOwnProperty("__filemeta")&&Object.defineProperty(z,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Java/Java-Fizz-Buzz.md"}}),z.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-java-fizz-buzz-md-8f2add91e5f9970baffe.js.map