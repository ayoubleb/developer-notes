(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{zYrr:function(e,n,r){"use strict";r.r(n),r.d(n,"_frontmatter",(function(){return i})),r.d(n,"default",(function(){return c}));r("1c7q"),r("abGl"),r("gZHo"),r("Fdmb"),r("Ir+3"),r("2mQt"),r("mXGw");var s=r("/FXl"),t=r("TjRS");r("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Observer.md"}});var b={_frontmatter:i},u=t.a;function c(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,s,t={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,["components"]);return Object(s.b)(u,o({},b,r,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"observer"},"Observer"),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"interface Observer {\n  uniqueID: string;\n  update(): void;\n}\n\nclass ConcreteObserver implements Observer {\n  public uniqueID: string;\n  constructor(uniqueID: string) {\n    this.uniqueID = uniqueID;\n  }\n\n  update(): void {\n    console.log(`${this.uniqueID} updates something...`);\n  }\n}\n\nfunction findObserver(obs: Observer[], uniqueID: string) {\n  let index = 0;\n  const existed = obs.some((observer, idx) => {\n    index = idx;\n    return observer.uniqueID === uniqueID;\n  });\n  return {\n    existed,\n    index\n  };\n}\n\nclass Subject {\n  private _observers: Observer[];\n  constructor() {\n    this._observers = [];\n  }\n\n  registerObserver(ob: Observer) {\n    const id: string = ob.uniqueID;\n    if (findObserver(this._observers, id).existed) {\n      return console.log(`Observer ${id} is already in list`);\n    }\n    this._observers.push(ob);\n    console.log(`Observer ${ob.uniqueID} is pushed into list`);\n    console.log(this._observers);\n  }\n\n  removeObserver(uniqueID: string) {\n    const { existed, index } = findObserver(this._observers, uniqueID);\n    if (existed) {\n      this._observers.splice(index, 1);\n      console.log(`Observer ${uniqueID} is removed from list`);\n    } else {\n      console.log('Observer not existed');\n    }\n  }\n\n  notifyObservers() {\n    console.log('Subject notify all observers >>');\n    this._observers.map((observer) => {\n      observer.update();\n    });\n  }\n}\n\n(function main() {\n  const subject = new Subject();\n\n  const obA = new ConcreteObserver('A');\n  const obB = new ConcreteObserver('B');\n  const obC = new ConcreteObserver('C');\n\n  subject.registerObserver(obA);\n  subject.registerObserver(obA); // already existed\n\n  subject.registerObserver(obB);\n  subject.registerObserver(obC);\n\n  subject.notifyObservers();\n})();\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Observer.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-observer-md-0035f4fa2c80b5f13fa0.js.map