(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{"./manual/Elm/Elm-Architecture.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i={},s="wrapper";function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(s,Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"elm-architecture"},"Elm Architecture"),Object(o.b)("h2",{id:"form-example"},"Form Example"),Object(o.b)("p",null,"This example gives an idea of the general layout."),Object(o.b)("p",null,"It is important to note how the ",Object(o.b)("inlineCode",{parentName:"p"},"Model"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Update")," and ",Object(o.b)("inlineCode",{parentName:"p"},"View")," within the example code works."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-elm"}),'import Browser\nimport Html exposing (..)\nimport Html.Attributes exposing (..)\nimport Html.Events exposing (onInput)\n\n\n\n-- MAIN\n\n\nmain =\n  Browser.sandbox { init = init, update = update, view = view }\n\n\n\n-- MODEL\n\n\ntype alias Model =\n  { name : String\n  , password : String\n  , passwordAgain : String\n  }\n\n\ninit : Model\ninit =\n  Model "" "" ""\n\n\n\n-- UPDATE\n\n\ntype Msg\n  = Name String\n  | Password String\n  | PasswordAgain String\n\n\nupdate : Msg -> Model -> Model\nupdate msg model =\n  case msg of\n    Name name ->\n      { model | name = name }\n\n    Password password ->\n      { model | password = password }\n\n    PasswordAgain password ->\n      { model | passwordAgain = password }\n\n\n\n-- VIEW\n\n\nview : Model -> Html Msg\nview model =\n  div []\n    [ viewInput "text" "Name" model.name Name\n    , viewInput "password" "Password" model.password Password\n    , viewInput "password" "Re-enter Password" model.passwordAgain PasswordAgain\n    , viewValidation model\n    ]\n\n\nviewInput : String -> String -> String -> (String -> msg) -> Html msg\nviewInput t p v toMsg =\n  input [ type_ t, placeholder p, value v, onInput toMsg ] []\n\n\nviewValidation : Model -> Html msg\nviewValidation model =\n  if model.password == model.passwordAgain then\n    div [ style "color" "green" ] [ text "OK" ]\n  else\n    div [ style "color" "red" ] [ text "Passwords do not match!" ]\n')),Object(o.b)("h2",{id:"useful-links"},"Useful links"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://guide.elm-lang.org/architecture/buttons.html"}),"Example and Insight into the Model-Update-View")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://ellie-app.com/37gWB93n8jJa1"}),"An online sandbox example for Elm")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://elmprogramming.com/function.html"}),"Functions in Elm"))))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Elm/Elm-Architecture.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-elm-elm-architecture.101a1afd2417ec7a4a77.js.map