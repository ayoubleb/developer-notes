(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{"./manual/Design-Patterns/Flyweight-Pattern.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i={},r="wrapper";function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(r,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"flyweight-pattern"},"Flyweight Pattern"),Object(o.b)("p",null,"The Flyweight Pattern falls under the structural design patterns from the Gang Of Four."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"flyweight")," is an object that minimizes memory usage by sharing as much data as possible with similar objects - a way to use objects in large numbers when a simple representation would use an unacceptable amount of memory."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Use when:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"many same objects are used and storage cost is high."),Object(o.b)("li",{parentName:"ul"},"you can externalise a majority of each object's state."),Object(o.b)("li",{parentName:"ul"},"few shared objects can replace many unshared ones."),Object(o.b)("li",{parentName:"ul"},"identity of an object not relevant.")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Here we will create a 1000 combatants that"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"interface Action {\n  move(location: [number, number]): void;\n  hit?(target: string, location: [number, number]): void;\n}\n\nclass Combatant implements Action {\n  private equipmentSet: string;\n  number: number;\n\n  constructor(set: string, number: number) {\n    // initialization consumes time\n    this.equipmentSet = set;\n    this.number = number;\n    console.log(`new Combatant ${number}`);\n  }\n\n  move(location: [number, number]): void {\n    console.log(`move to ${location}`);\n  }\n\n  hit?(target: string, location: [number, number]): void {\n    console.log(`damage ${target} at ${location}`);\n  }\n}\n\nclass CombatantAcademy {\n  private static groups: { [set: string]: Combatant } = {};\n\n  public static getCombatant(set: string, num: number) {\n    let combatant = CombatantAcademy.groups[set];\n\n    if (!combatant) {\n      combatant = new Combatant(set, num);\n      CombatantAcademy.groups[set] = combatant;\n    } else {\n      combatant.number = num;\n      console.log(`shared Combatant ${combatant.number}`);\n    }\n\n    return combatant;\n  }\n}\n\n(function main() {\n  let start, end;\n\n  // the larger you change the threshold, the bigger the difference\n  const threshold = 50000;\n\n  // inefficient creating without flyweight\n  start = Math.floor(Date.now());\n  for (let i = 0; i < threshold; i++) {\n    new Combatant('normal-set', i); // creating fifty thousand real Combatants\n  }\n  end = Math.floor(Date.now());\n  const withoutFlyweight = end - start;\n\n  // efficient create with flyweight\n  start = Math.floor(Date.now());\n  for (let i = 0; i < threshold; i++) {\n    CombatantAcademy.getCombatant('normal-set', i); // create 1 Combatant\n  }\n  end = Math.floor(Date.now());\n  const withFlyweight = end - start;\n\n  console.log('Without Flyweight', withoutFlyweight);\n  console.log('With Flyweight', withFlyweight);\n})();\n")),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://circle.visual-paradigm.com/flyweight/"}),"Flyweight Example")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Flyweight_pattern"}),"Flyweight Wikipedia"))))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Flyweight-Pattern.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-design-patterns-flyweight-pattern.101a1afd2417ec7a4a77.js.map