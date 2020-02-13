(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{"6B+J":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),r=n("TjRS");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/Enzyme-Testing.md"}});var p={_frontmatter:a},i=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(i,s({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"testing-with-enzyme"},"Testing with Enzyme"),Object(o.b)("p",null,"React components allow unit tests in JS to be much easier."),Object(o.b)("p",null,"These exampes require ",Object(o.b)("inlineCode",{parentName:"p"},"sinonjs"),", ",Object(o.b)("inlineCode",{parentName:"p"},"jsdom"),", ",Object(o.b)("inlineCode",{parentName:"p"},"enzyme"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mocha"),", ",Object(o.b)("inlineCode",{parentName:"p"},"chai")),Object(o.b)("p",null,"These are examples of the three APIs that you get with Enzyme. Remember, that a majority of the test cases will need ",Object(o.b)("inlineCode",{parentName:"p"},"shallow"),"."),Object(o.b)("p",null,"Testing lifecycle events, use ",Object(o.b)("inlineCode",{parentName:"p"},"mount"),"."),Object(o.b)("p",null,"If you need to test a component that gets rendered or returns just HTML, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"render"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"File structure")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"test\n- repository_test.spec.js\n- github_widget.spec.js\n- user_image.spec.js"),Object(o.b)("li",{parentName:"ul"},"scripts\n- mocha_runner.js"),Object(o.b)("li",{parentName:"ul"},"package.json"),Object(o.b)("li",{parentName:"ul"},"src\n- components\n- repositories.js")),Object(o.b)("h2",{id:"enz-1-testing-with-shallow"},'ENZ-1: Testing with "Shallow"'),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{}),'// package.json\n...\n\nNote: the --debug flag allows us to use the debugger statements and interact with the debugger through the command line\n\nNote: There is also a `node-intercept` that allows you to tap into Chrome Dev tools\n\n"scripts": {\n    ...\n    "test": "mocha --debug --require scripts/mocha_runner.js ./test/**/*.spec.js",\n    ...\n}\n...\n\n')),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{}),"// reposity_test.js\nimport React from 'react-native';\nimport { shallow } from 'enzyme';\nimport { expect } from 'chai';\n\n// import a component\nimport Repositories from '../src/components/repositories';\n\ndescribe('<Repositories />', () => {\n    it('should render one number of repos specified by top prop', () => {\n        const wrapper = shallow(<Repositories repositories={repos} top={2} />);\n        expect(wrapper.find(Repository)).to.have.length(2);\n    });\n\n    it('should display repos ordered by stargazers' () => {\n        const sortedTestData = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);\n        const wrapper = shallow(<Repositories repositories={repos} top={2} />);\n\n        // find each child <Repository /> with <Repositories />\n        const topRepos = wrapper.find(Repository);\n\n        // for each <Repository /> found, test out correct values\n        topRepos.forEach((repo, index) => {\n            expect(repo.prop('url')).to.equal(sortedTestData[index.url]);\n            expect(repo.prop('name')).to.equal(sortedTestData[index].name);\n            expect(repo.prop('language')).to.equal(sortedTestData[index].language);\n            expect(repo.prop('stars')).to.equal(sortedTestData[index].stars);\n        });\n    });\n});\n")),Object(o.b)("h2",{id:"enz-2-testing-with-mount"},'ENZ-2: Testing with "Mount"'),Object(o.b)("p",null,"This requires use of ",Object(o.b)("inlineCode",{parentName:"p"},"js-dom")),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{}),"// mocha_runner.js\n\nvar jsdom = require('jsdom').jsdom;\n\nvar exposedProperties = ['window', 'navigator', 'document'];\n\nglobal.document = jsdom('');\nglobal.window = document.defaultView;\nObject.keys(document.defaultView).forEach((property) => {\n    if (typeof global[property] === 'undefined') {\n        exposedProperties.push(property);\n        global[property] = document.defaultView[property];\n    }\n});\n\nglobal.navigator = {\n    userAgent: 'node.js'\n};\n\ndocumentRef = document;\n\nrequire('babel-core/register');\n")),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{}),"// github_widget.spec.js\nimport React from 'react-native';\nimport { mount } from 'enzyme';\nimport { expect } from 'chai';\nimport sinon from 'sinon';\n\n// js dom has also been used as an example for these headless browser testing\n\n// import a component\nimport GithubWidget from '../src/components/GithubWidget';\nimport UserDetails from ...\n// import all the other components\n// found in the expect below\n...\n\ndescribe('<GithubWidget />', () => {\n    it('should render all sub-components', () => {\n        const wrapper = mount(<GithubWidget username=\"test\" />);\n        \n        expect(wrapper.containsAllMatchingElements([\n            <UserDetails />,\n            <UserStats />,\n            <hr />,\n            <Repositories />,\n            <Footer />\n        ])).to.equal(true);\n    });\n\n    it('should display repos ordered by stargazers' () => {\n        const sortedTestData = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);\n        const wrapper = shallow(<Repositories repositories={repos} top={2} />);\n\n        // find each child <Repository /> with <Repositories />\n        const topRepos = wrapper.find(Repository);\n\n        // for each <Repository /> found, test out correct values\n        topRepos.forEach((repo, index) => {\n            expect(repo.prop('url')).to.equal(sortedTestData[index.url]);\n            expect(repo.prop('name')).to.equal(sortedTestData[index].name);\n            expect(repo.prop('language')).to.equal(sortedTestData[index].language);\n            expect(repo.prop('stars')).to.equal(sortedTestData[index].stars);\n        });\n    });\n\n    it('should call componentDidMount once' () => {\n        // create a spy\n        sinon.spy(GithubWidget.prototype, 'componentDidMount');\n        mount(<GithubWidget username =\"test />\");\n        expect(GithubWidget.prototype.componentDidMount.calledOnce).to.equal(true);\n    });\n});\n")),Object(o.b)("h2",{id:"enz-3-testing-with-render"},'ENZ-3: Testing with "Render"'),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{}),"// user_image.spec.js\nimport React from 'react-native';\nimport { render } from 'enzyme';\nimport { expect } from 'chai';\n\n// Component\nimport UserImage from './UserImage';\n\ndescribe('<UserImage />', () => {\n    it('should have a <div /> element with .gh-widget-photo class', () => {\n        const wrapper = render(<UserImage />);\n        expect(wrapper.find('div').attr('class')).to.equal('gh-widget-photo');\n    });\n});\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/Enzyme-Testing.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-enzyme-testing-md-7bcbd83ac814049dc632.js.map