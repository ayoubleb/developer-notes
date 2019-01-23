(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{"./manual/Twig/Twig-Cheat-Sheet.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,c(t).call(this,e))).layout=null,n}var n,a,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"twig-cheat-sheet"}},"TWIG CHEAT SHEET"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#twig-cheat-sheet"}},"TWIG CHEAT SHEET"),o.a.createElement(r.MDXTag,{name:"ul",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#web-synopsis"}},"Web Synopsis")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#attributes"}},"Attributes")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#setting-variables"}},"Setting Variables")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#filters"}},"Filters")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#functions"}},"Functions")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#named-arguments"}},"Named Arguments")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#control-flow-structure"}},"Control Flow Structure")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#comments"}},"Comments")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#include"}},"Include")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#extends"}},"Extends")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#template-inheritance"}},"Template Inheritance")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#manual-escaping"}},"Manual Escaping")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#macros-add-in-if-you-think-it-is-relevant"}},"Macros (add in if you think it is relevant)"))))),o.a.createElement(r.MDXTag,{name:"p",components:t},"// references"),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://twig.sensiolabs.org/doc/templates.html"}},"http://twig.sensiolabs.org/doc/templates.html")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Ensure you have a highlighter tool."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"web-synopsis"}},"Web Synopsis"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html"}},'<!DOCTYPE html>\n<html>\n    <head>\n        <title>My Webpage</title>\n    </head>\n    <body>\n        <ul id="navigation">\n        {% for item in navigation %}\n            <li><a href="{{ item.href }}">{{ item.caption }}</a></li>\n        {% endfor %}\n        </ul>\n\n        <h1>My Webpage</h1>\n        {{ a_variable }}\n    </body>\n</html>\n')),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"attributes"}},"Attributes"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The application passes variables to the templates for manipulation in the template. Variables may have attributes or elements you can access, too. The visual representation of a variable depends heavily on the application providing it."),o.a.createElement(r.MDXTag,{name:"p",components:t},'You can use a dot (.) to access attributes of a variable (methods or properties of a PHP object, or items of a PHP array), or the so-called "subscript" syntax ([]):'),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{{ foo.bar }}\n{{ foo['bar'] }}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"When the attribute contains special characters (like - that would be interpreted as the minus operator), use the attribute function instead to access the variable attribute:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{# equivalent to the non-working foo.data-foo #}\n{{ attribute(foo, 'data-foo') }}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"setting-variables"}},"Setting Variables"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{% set foo = 'foo' %}\n{% set foo = [1, 2] %}\n{% set foo = {'foo': 'bar'} %}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"filters"}},"Filters"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Variables can be modified by filters. Filters are separated from the variable by a pipe symbol (|) and may have optional arguments in parentheses. Multiple filters can be chained. The output of one filter is applied to the next."),o.a.createElement(r.MDXTag,{name:"p",components:t},"The following example removes all HTML tags from the name and title-cases it:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{{ name|striptags|title }}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Filters that accept arguments have parentheses around the arguments. This example will join a list by commas:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{{ list|join(', ') }}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"To apply a filter on a section of code, wrap it in the filter tag:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{% filter upper %}\n    This text becomes uppercase\n{% endfilter %}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Go to the filters page to learn more about built-in filters."),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://twig.sensiolabs.org/doc/filters/index.html"}},"http://twig.sensiolabs.org/doc/filters/index.html")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"functions"}},"Functions"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Functions can be called to generate content. Functions are called by their name followed by parentheses (()) and may have arguments."),o.a.createElement(r.MDXTag,{name:"p",components:t},"For instance, the range function returns a list containing an arithmetic progression of integers:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{% for i in range(0, 3) %}\n    {{ i }},\n{% endfor %}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://twig.sensiolabs.org/doc/functions/index.html"}},"http://twig.sensiolabs.org/doc/functions/index.html")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"named-arguments"}},"Named Arguments"),o.a.createElement(r.MDXTag,{name:"p",components:t},"New in version 1.12: Support for named arguments was added in Twig 1.12."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{% for i in range(low=1, high=10, step=2) %}\n    {{ i }},\n{% endfor %}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Using named arguments makes your templates more explicit about the meaning of the values you pass as arguments:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{{ data|convert_encoding('UTF-8', 'iso-2022-jp') }}\n\n{# versus #}\n\n{{ data|convert_encoding(from='iso-2022-jp', to='UTF-8') }}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Named arguments also allow you to skip some arguments for which you don't want to change the default value:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},'{# the first argument is the date format, which defaults to the global date format if null is passed #}\n{{ "now"|date(null, "Europe/Paris") }}\n\n{# or skip the format value by using a named argument for the time zone #}\n{{ "now"|date(timezone="Europe/Paris") }}\n')),o.a.createElement(r.MDXTag,{name:"p",components:t},"You can also use both positional and named arguments in one call, in which case positional arguments must always come before named arguments:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},'{{ "now"|date(\'d/m/Y H:i\', timezone="Europe/Paris") }}\n')),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"control-flow-structure"}},"Control Flow Structure"),o.a.createElement(r.MDXTag,{name:"p",components:t},"A control structure refers to all those things that control the flow of a program - conditionals (i.e. if/elseif/else), for-loops, as well as things like blocks. Control structures appear inside {% ... %} blocks."),o.a.createElement(r.MDXTag,{name:"p",components:t},"For example, to display a list of users provided in a variable called users, use the for tag:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html"}},"<h1>Members</h1>\n<ul>\n    {% for user in users %}\n        <li>{{ user.username|e }}</li>\n    {% endfor %}\n</ul>\n\nThe if tag can be used to test an expression:\n\n{% if users|length > 0 %}\n    <ul>\n        {% for user in users %}\n            <li>{{ user.username|e }}</li>\n        {% endfor %}\n    </ul>\n{% endif %}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://twig.sensiolabs.org/doc/tags/index.html"}},"http://twig.sensiolabs.org/doc/tags/index.html")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"comments"}},"Comments"),o.a.createElement(r.MDXTag,{name:"p",components:t},"To comment-out part of a line in a template, use the comment syntax {# ... #}. This is useful for debugging or to add information for other template designers or yourself:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{# note: disabled template because we no longer use this\n    {% for user in users %}\n        ...\n    {% endfor %}\n#}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"include"}},"Include"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Includes a partial file"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{% include 'partials/head.twig' %}\n\n{% for box in boxes %}\n    {{ include('render_box.html') }}\n{% endfor %}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"extends"}},"Extends"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Use extends to include the layout and then use the block headers to import the required content."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{% extends \"master.twig\" %}\n\n{% block header %}\n  {% include 'partials/header.twig' with {\n    'title': artist.title\n  } %}\n{% endblock %}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"template-inheritance"}},"Template Inheritance"),o.a.createElement(r.MDXTag,{name:"p",components:t},'The most powerful part of Twig is template inheritance. Template inheritance allows you to build a base "skeleton" template that contains all the common elements of your site and defines blocks that child templates can override.'),o.a.createElement(r.MDXTag,{name:"p",components:t},"Sounds complicated but it is very basic. It's easier to understand it by starting with an example."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Let's define a base template, base.html, which defines a simple HTML skeleton document that you might use for a simple two-column page:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html"}},'<!DOCTYPE html>\n<html>\n    <head>\n        {% block head %}\n            <link rel="stylesheet" href="style.css" />\n            <title>{% block title %}{% endblock %} - My Webpage</title>\n        {% endblock %}\n    </head>\n    <body>\n        <div id="content">{% block content %}{% endblock %}</div>\n        <div id="footer">\n            {% block footer %}\n                &copy; Copyright 2011 by <a href="http://domain.invalid/">you</a>.\n            {% endblock %}\n        </div>\n    </body>\n</html>\n')),o.a.createElement(r.MDXTag,{name:"p",components:t},"In this example, the block tags define four blocks that child templates can fill in. All the block tag does is to tell the template engine that a child template may override those portions of the template."),o.a.createElement(r.MDXTag,{name:"p",components:t},"A child template might look like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html"}},'{% extends "base.html" %}\n\n{% block title %}Index{% endblock %}\n{% block head %}\n    {{ parent() }}\n    <style type="text/css">\n        .important { color: #336699; }\n    </style>\n{% endblock %}\n{% block content %}\n    <h1>Index</h1>\n    <p class="important">\n        Welcome to my awesome homepage.\n    </p>\n{% endblock %}\n')),o.a.createElement(r.MDXTag,{name:"p",components:t},'The extends tag is the key here. It tells the template engine that this template "extends" another template. When the template system evaluates this template, first it locates the parent. The extends tag should be the first tag in the template.'),o.a.createElement(r.MDXTag,{name:"p",components:t},"Note that since the child template doesn't define the footer block, the value from the parent template is used instead."),o.a.createElement(r.MDXTag,{name:"p",components:t},"It's possible to render the contents of the parent block by using the parent function. This gives back the results of the parent block:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html"}},"{% block sidebar %}\n    <h3>Table Of Contents</h3>\n    ...\n    {{ parent() }}\n{% endblock %}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"manual-escaping"}},"Manual Escaping"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Working with Manual Escaping\nIf manual escaping is enabled, it is your responsibility to escape variables if needed. What to escape? Any variable you don't trust."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Escaping works by piping the variable through the escape or e filter:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{{ user.username|e }}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"By default, the escape filter uses the html strategy, but depending on the escaping context, you might want to explicitly use any other available strategies:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{{ user.username|e('js') }}\n{{ user.username|e('css') }}\n{{ user.username|e('url') }}\n{{ user.username|e('html_attr') }}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Working with Automatic Escaping"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Whether automatic escaping is enabled or not, you can mark a section of a template to be escaped or not by using the autoescape tag:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{% autoescape %}\n    Everything will be automatically escaped in this block (using the HTML strategy)\n{% endautoescape %}\n\nBy default, auto-escaping uses the html escaping strategy. If you output variables in other contexts, you need to explicitly escape them with the appropriate escaping strategy:\n\n{% autoescape 'js' %}\n    Everything will be automatically escaped in this block (using the JS strategy)\n{% endautoescape %}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"macros-add-in-if-you-think-it-is-relevant"}},"Macros (add in if you think it is relevant)"))}}])&&p(n.prototype,a),m&&p(n,m),t}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-twig-twig-cheat-sheet.305817e8304de77c75ce.js.map