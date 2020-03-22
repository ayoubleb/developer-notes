(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{"./manual/Machine-Learning/ML-Random-Forest-Regression.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),r={},s="wrapper";function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(s,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"random-forest-regression"},"Random Forest Regression"),Object(a.b)("h2",{id:"intuition"},"Intuition"),Object(a.b)("p",null,"Random forest is a version of ensemble learning."),Object(a.b)("p",null,"It's when you take the same algorithm multiple times and create something more powerful."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Steps")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Pick at random K data points from the Training Set."),Object(a.b)("li",{parentName:"ol"},"Build the Decision Tree associated to these K data points."),Object(a.b)("li",{parentName:"ol"},"Choose the number Ntree of trees you want to build and repeat steps 1 and 2."),Object(a.b)("li",{parentName:"ol"},"For a new data point, make each one of your Ntree trees predict the value of ",Object(a.b)("inlineCode",{parentName:"li"},"Y")," for the data point in question, and assign the new data point the average across all the predicted ",Object(a.b)("inlineCode",{parentName:"li"},"Y")," values.")),Object(a.b)("p",null,"Doing this allows you to improve the accuracy of your prediction."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example")),Object(a.b)("p",null,"How many lollies in a jar? Imagine taking notes of every guess - getting around 1000 and then beginning to average them out or take the median. Statistically speaking, you have a highly likelihood of being closer to the truth."),Object(a.b)("p",null,"Once you hit the middle of the normal distribution, you are more likely to be on the money for the guess."),Object(a.b)("h2",{id:"python"},"PYTHON"),Object(a.b)("p",null,"This is the last regression model. If you understand decision tree regression, you'll understand random forest."),Object(a.b)("p",null,"From decision tree, we know that we will need the visualisation using the non-continuous result."),Object(a.b)("p",null,"For the regressor, we use RandomForestRegressor library."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-python"}),"# Prediciting the Random Forest results\n# Create the Regressor\nfrom sklearn.ensemble import RandomForestRegressor\nregressor = RandomForestRegressor(random_state=0)\nregressor.fit(X, y)\n")),Object(a.b)("p",null,"Simply, with these lines, we can already determine that the graph is no longer continuous."),Object(a.b)("p",null,'By having several decision trees, we end up with a lot more "steps" than we had with just one decision tree.'),Object(a.b)("p",null,"More tree !== more steps. The more trees you have, the more the average will converge towards the same average."),Object(a.b)("p",null,"Generally the steps will become better placed depending on the average."))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Machine-Learning/ML-Random-Forest-Regression.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-machine-learning-ml-random-forest-regression.101a1afd2417ec7a4a77.js.map