(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{IQYh:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),a=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Expo/Working-With-Detox.md"}});var r={_frontmatter:l},b=a.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(b,i({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"intro-to-detox-and-expo"},"Intro to Detox and Expo"),Object(o.b)("h2",{id:"links"},"Links"),Object(o.b)("p",null,Object(o.b)("a",i({parentName:"p"},{href:"https://github.com/wix/detox/blob/master/docs/Guide.Expo.md"}),"Setup guide can be found here")),Object(o.b)("h2",{id:"prereqs"},"Prereqs"),Object(o.b)("p",null,"Ensure Node is 8.3.0 or higher."),Object(o.b)("p",null,"Install ",Object(o.b)("inlineCode",{parentName:"p"},"applesimutils"),":"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-shell"}),"brew tap wix/brew\nbrew install applesimutils\n")),Object(o.b)("p",null,"Install detox-cli:"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-shell"}),"npm install -g detox-cli\n")),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("h3",{id:"1-yarn-add"},"1. Yarn add"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{}),"yarn add detox detox-expo-helpers expo-detox-hook\n")),Object(o.b)("h3",{id:"2-add-the-following-to-packagejson"},"2. Add the following to package.json"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-json"}),'"detox": {\n  "configurations": {\n    "ios.sim": {\n      "binaryPath": "bin/Exponent.app",\n      "type": "ios.simulator",\n      "name": "iPhone 7"\n    }\n  }\n}\n')),Object(o.b)("p",null,"…and to the scripts object:"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-json"}),'"scripts": {\n    "e2e": "detox test --configuration ios.sim"\n}\n')),Object(o.b)("h3",{id:"3-download-ipa"},"3. Download IPA"),Object(o.b)("p",null,"Fetch the IPA file ",Object(o.b)("a",i({parentName:"p"},{href:"https://expo.io/tools#client"}),"from here")),Object(o.b)("h3",{id:"4-copy-e2e-files"},"4. Copy e2e files"),Object(o.b)("p",null,"Fetch/copy files ",Object(o.b)("a",i({parentName:"p"},{href:"https://github.com/expo/with-detox-tests/tree/master/e2e"}),"from Github")),Object(o.b)("h2",{id:"using-detox"},"Using Detox"),Object(o.b)("p",null,"A basic example of incorporating some useful detox calls:"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-js"}),"const { reloadApp } = require('detox-expo-helpers');\n\ndescribe('Login flow', () => {\n  beforeEach(async () => {\n    await reloadApp();\n  });\n\n  it('should login successfully', async () => {\n    await device.reloadReactNative();\n    await expect(element(by.id('email'))).toBeVisible();\n\n    await element(by.id('email')).typeText('john@example.com');\n    await element(by.id('password')).typeText('123456');\n    await element(by.text('Login')).tap();\n\n    await expect(element(by.text('Welcome'))).toBeVisible();\n    await expect(element(by.id('email'))).toNotExist();\n  });\n});\n")),Object(o.b)("p",null,"The element can be selected by making the most of using the ",Object(o.b)("inlineCode",{parentName:"p"},"testId")," — for example, the following test button has ID ",Object(o.b)("inlineCode",{parentName:"p"},"hello_button"),":"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-js"}),"<TouchableOpacity\n  testID=\"hello_button\"\n  onPress={this.onButtonPress.bind(this, 'Hello')}\n>\n  <Text style={{ color: 'blue', marginBottom: 20 }}>Say Hello</Text>\n</TouchableOpacity>\n")),Object(o.b)("h2",{id:"running-the-tests"},"Running the tests"),Object(o.b)("p",null,"Finally, to run the test we can run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," in one terminal and ",Object(o.b)("inlineCode",{parentName:"p"},"yarn e2e")," on the other to run the ",Object(o.b)("inlineCode",{parentName:"p"},"e2e")," script. Note that you need to have live reload disabled, so better to also put the app into production mode before running the e2e tests. This can be done from the terminal following the instructions to set production mode."),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("p",null,"You may need to add the ",Object(o.b)("inlineCode",{parentName:"p"},"--reuse")," flag to the ",Object(o.b)("inlineCode",{parentName:"p"},"e2e")," script. At the time of writing, the current version 0.55 is having issues on iOS with hanging. The requirement at the moment is that you have to open and close the Expo window. ",Object(o.b)("a",i({parentName:"p"},{href:"https://github.com/wix/Detox/issues/917#issuecomment-422396875"}),"See this GitHub issue for more info"),"."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Expo/Working-With-Detox.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-expo-working-with-detox-md-d72af09c837a49f004af.js.map