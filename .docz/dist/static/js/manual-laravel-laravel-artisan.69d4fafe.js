(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{"./manual/Laravel/Laravel-Artisan.md":function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d});var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function c(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function s(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(e){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(a=s(this,l(n).call(this,e))).layout=null,a}var a,t,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(n,o.a.Component),a=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components;p(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"laravel-and-artisan"}},"Laravel and Artisan"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Artisan is the command-line interface included with Laravel. It provides a number of helpful commands that can assist you while you build your application. "),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"basics"}},"Basics"),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Commands"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"php artisan list")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"List commands")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"php aristan help migrate")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Example that every command has it's own help command")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"php artisan tinker")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"All Laravel applications include Tinker, a REPL powered by the PsySH package.")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"php artisan make:command SendEmails")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Create custom command SendEmails")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"email:send {user}")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Adding custom args")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"email:send {user?}")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Optional custom args")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"email:send {user=foo}")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Default custom args")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"email:send {user} {--queue=}")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Adding custom options")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"email:send {user} {--Q|queue}")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"option shortcuts")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"email:send {user*}")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Input arrays")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"email:send {user : The ID of the user}")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Input descriptions")))),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Laravel REPL")),o.a.createElement(r.MDXTag,{name:"p",components:n},"All Laravel applications include Tinker, a REPL powered by the PsySH package. Tinker allows you to interact with your entire Laravel application on the command line, including the Eloquent ORM, jobs, events, and more. To enter the Tinker environment, run the tinker Artisan command ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"php artisan tinker"),"."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"custom-commands"}},"Custom Commands"),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can build your own custom commands which are typically stored in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"app/Console/Commands")," directory."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Feel free to change storage as long as it can be accessed by ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Composer"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once you have created a command for the CLI, you will need to register it before you can use it on the CLI."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Command Structure")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Example commands ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SendEmails"),". Note that we are able to inject any dependencies we need into the command's constructor. The Laravel service container will automatically inject all dependencies type-hinted in the constructor."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-php"}},"<?php\n\nnamespace AppConsoleCommands;\n\nuse AppUser;\nuse AppDripEmailer;\nuse IlluminateConsoleCommand;\n\nclass SendEmails extends Command\n{\n    /**\n     * The name and signature of the console command.\n     *\n     * @var string\n     */\n    protected $signature = 'email:send {user}';\n\n    /**\n     * The console command description.\n     *\n     * @var string\n     */\n    protected $description = 'Send drip e-mails to a user';\n\n    /**\n     * The drip e-mail service.\n     *\n     * @var DripEmailer\n     */\n    protected $drip;\n\n    /**\n     * Create a new command instance.\n     *\n     * @param  DripEmailer  $drip\n     * @return void\n     */\n    public function __construct(DripEmailer $drip)\n    {\n        parent::__construct();\n\n        $this->drip = $drip;\n    }\n\n    /**\n     * Execute the console command.\n     *\n     * @return mixed\n     */\n    public function handle()\n    {\n        $this->drip->send(User::find($this->argument('user')));\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Closure Commands")),o.a.createElement(r.MDXTag,{name:"p",components:n},"This is an alternative to declaring a class for a console command. This is similar to the same way that route Closures are an alternative to controllers."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Within the commands method of your app/Console/Kernel.php file, Laravel loads the routes/console.php file."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-php"}},"/**\n * Register the Closure based commands for the application.\n *\n * @return void\n */\nprotected function commands()\n{\n    require base_path('routes/console.php');\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Even though this file does not define HTTP routes, it defines console based entry points (routes) into your application. Within this file, you may define all of your Closure based routes using the  Artisan::command method. The command method accepts two arguments: the command signature and a Closure which receives the commands arguments and options."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-php"}},"Artisan::command('build {project}', function ($project) {\n    $this->info(\"Building {$project}!\");\n});\n")))}}])&&c(a.prototype,t),m&&c(a,m),n}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=manual-laravel-laravel-artisan.305817e8304de77c75ce.js.map