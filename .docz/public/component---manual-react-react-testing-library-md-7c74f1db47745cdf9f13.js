(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{"2z1u":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),o=t("TjRS");t("aD51");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React/React-Testing-Library.md"}});var a={_frontmatter:i},p=o.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(p,c({},a,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"react-testing-library"},"React Testing Library"),Object(r.b)("p",null,"An example of the library in action:"),Object(r.b)("pre",null,Object(r.b)("code",c({parentName:"pre"},{className:"language-typescript"}),"import * as React from 'react';\nimport { render, fireEvent } from '@testing-library/react';\nimport TeamDropdown from '../TeamDropdown';\n\nconst stubProps = {\n  isArchiveable: false,\n  editAction: jest.fn(),\n  archiveAction: jest.fn(),\n  deleteAction: jest.fn()\n};\n\nconst Wrapper = (props: any = {}) => <TeamDropdown {...stubProps} {...props} />;\n\ndescribe('team dropdown state', () => {\n  test('should not be archivable when isArchiveable is false', () => {\n    const component = render(<Wrapper />);\n    fireEvent.click(component.getByText('Open menu'));\n\n    expect(component.queryByText('Archive')).toBeNull();\n  });\n\n  test('should be archivable when isArchiveable is true', () => {\n    const component = render(<Wrapper isArchiveable={true} />);\n    fireEvent.click(component.getByText('Open menu'));\n\n    expect(component.queryByText('Archive')).toBeTruthy();\n  });\n\n  test('should fire archive action', () => {\n    const component = render(<Wrapper isArchiveable={true} />);\n    fireEvent.click(component.getByText('Open menu'));\n    expect(component.queryByText('Archive')).toBeTruthy();\n\n    fireEvent.click(component.getByText('Archive'));\n    expect(stubProps.archiveAction).toBeCalled();\n  });\n\n  test('should fire edit action', () => {\n    const component = render(<Wrapper />);\n    fireEvent.click(component.getByText('Open menu'));\n    fireEvent.click(component.getByText('Edit'));\n    expect(stubProps.editAction).toBeCalled();\n  });\n\n  test('should fire delete action', () => {\n    const component = render(<Wrapper />);\n    fireEvent.click(component.getByText('Open menu'));\n    fireEvent.click(component.getByText('Delete'));\n    expect(stubProps.deleteAction).toBeCalled();\n  });\n});\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React/React-Testing-Library.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-react-testing-library-md-7c74f1db47745cdf9f13.js.map