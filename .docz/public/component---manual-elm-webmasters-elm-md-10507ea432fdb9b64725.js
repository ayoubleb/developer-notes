(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{PG5d:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),l=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Elm/Webmasters-Elm.md"}});var s={_frontmatter:i},b=l.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(a.b)(b,r({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"webmasters-elm"},"Webmasters Elm"),Object(a.b)("h2",{id:"costs"},"Costs"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Learning a new language"),Object(a.b)("li",{parentName:"ol"},"Smaller ecosystem"),Object(a.b)("li",{parentName:"ol"},"Fewer Web APIs have first-class support")),Object(a.b)("h2",{id:"benefits"},"Benefits"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Bundle size small"),Object(a.b)("li",{parentName:"ol"},"Production Elm in the first week")),Object(a.b)("h2",{id:"elm"},"Elm"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"JS Equivalent"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Elm"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"UI"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"view")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"State"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"model")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Async"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"update")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Utilities"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"core")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Packages"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"elm install")))),Object(a.b)("h2",{id:"rendering-a-page"},"Rendering a page"),Object(a.b)("h3",{id:"compiling"},"Compiling"),Object(a.b)("p",null,"Compiles to JS."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"elm make Main.elm --output elm.js\n")),Object(a.b)("h2",{id:"user-interface-example"},"User Interface Example"),Object(a.b)("p",null,"Converting this to Elm:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"let pluralize = (singular, plural, quantity) =>\n  quantity === 1 ? singular : plural;\n")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),'pluralize singular plural quantity =\n    if quantity == 1 then\n        singular\n    else\n        plural\n\nmain =\n    text (pluralize "leaf" "leaves" 1) -- parentheses are to disambiguate\n')),Object(a.b)("h2",{id:"part-1---example"},"Part 1 - Example"),Object(a.b)("p",null,"This basic example gives a short look at actually creating a working piece of code."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),'module Main exposing (main)\n\nimport Html exposing (..)\nimport Html.Attributes exposing (..)\n\n\nbanner =\n    div [ class "banner" ]\n        [ div [ class "container" ]\n            [ h1 [] [ text "conduit"]\n            , p [] [ text "A place to share your knowledge."]\n            ]\n        ]\n\n\nfeed =\n    div [ class "feed-toggle" ] [ text "(In the future we’ll display a feed of articles here!)" ]\n\n\nmain =\n    div [ class "home-page" ]\n        [ banner\n        , div [ class "container page" ]\n            [ div [ class "row" ]\n                [ div [ class "col-md-9" ] [ feed ]\n                , div [ class "col-md-3" ] []\n                ]\n            ]\n        ]\n')),Object(a.b)("h2",{id:"the-elm-architecture"},"The Elm Architecture"),Object(a.b)("p",null,"Update, Model, View."),Object(a.b)("p",null,"View is function that takes a ",Object(a.b)("inlineCode",{parentName:"p"},"model")," as a function."),Object(a.b)("p",null,"Note that whatever message you use, you need to be consistent for ",Object(a.b)("inlineCode",{parentName:"p"},"Update")," and ",Object(a.b)("inlineCode",{parentName:"p"},"View"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),"type alias Msg =\n    { description: String\n    , data: String\n    }\n\nview : Model -> Html Msg\nview model =\n\n--\nupdate : Msg -> Model -> Model\nupdate msg model =\n")),Object(a.b)("h2",{id:"type-annotations"},"Type Annotations"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),'username = "okeeffed"\n\n-- typed example (Elm uses inference either way)\nusername : String\nusername = "okeeffed"\n\n-- alt example\nString.length : String -> Int\n\n-- name list\nnames : List String\nnames = ["Sam", "Bob", "Bill"]\n')),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),"pluralize : String -> String -> Int -> String\n\n-- equivocal to\npluralize : String -> (String -> (Int -> String))\n")),Object(a.b)("h2",{id:"case-expressions"},"Case Expressions"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),'case model.tab of\n    "YourFeed" ->\n        -- show feed\n    "GlobalFeed" ->\n        -- show Global Feed\n    _ ->\n        -- show Tag Feed\n')),Object(a.b)("h2",{id:"custom-types"},"Custom Types"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),'-- creates completely distinct values\ntype Tab =\n    YourFeed\n    | GlobalFeed\n    | TagFeed\n\nyours : Tab\nyours =\n    YourFeed\n\n-- Turning types into functions\n\ntype Tab =\n    YourFeed\n    | GlobalFeed\n    | TagFeed String\n\n-- in the repl\n> TagFeed "Happiness"\nTagFeed "Happiness" : Tab\n> TagFeed\n<function> : String -> Tab\n')),Object(a.b)("p",null,"Using Custom Types with updates:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),"-- allows us to pass different data types\ntype Msg\n    = ClickedTag String\n    | ClickedPage Int\n\nupdate msg model =\n    case msg of\n        ClickedTag selectedTag ->\n            -- use tag here\n        ClickedPage page ->\n            -- use page here\n")),Object(a.b)("p",null,"Summing it all up"),Object(a.b)("p",null,"Type | In Elm\ncase-expressions | case msg of\nEnumerations | type Bool = True | False\nContainers | type Msg = ClickedPage Int | ...\nVariant Functions | onClick (ClickedPage pageNumber)"),Object(a.b)("h2",{id:"maybe-overview"},"Maybe Overview"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),"-- List.head : List elem -> Maybe elem\nfirst users =\n    List.head users\n\n-- example case\ncase first newUsers of\n    Just user ->\n        String.length user\n    Nothing ->\n        0\n")),Object(a.b)("h2",{id:"pipelines"},"Pipelines"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),"List.head (List.map (List.reverse (List.filter (\\x -> x < 5) [2, 4, 6])) negate)\n\n-- As pipeline\n[2, 4, 6]\n    |> List.filter (\\x -> x < 5)\n    |> List.reverse\n    |> List.map negate\n    |> List.head\n")),Object(a.b)("h2",{id:"decoding-json"},"Decoding JSON"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),'-- Import to understand custom type\ntype Result okVal errVal\n    = Ok okVal\n    | Err errVal\n\n-- similar to String.toint()\ncase decodeString Json.Decode.int "42" of\n    Ok num ->\n        -- Do something with Int\n    Err error ->\n        -- Do something with the error\n\ntype alias User =\n    { id : Int\n    , firstName : String\n    , lastName : String\n    }\n\nuser : Decoder User\nuser =\n    Json.Decode.succeed User\n        |> required "user_id" int\n        |> required "first_name" string\n        |> required "last_name" string\n\n-- Alternatively\nusers : Decoder (List User)\nusers =\n    list user\n')),Object(a.b)("h2",{id:"optional-and-nullable"},"Optional and Nullable"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),'type alias User =\n    { id : Int\n    , name : Maybe String\n    , email : String\n    }\n\nuser : Decoder User\nuser =\n    Json.Decode.succeed User\n        |> required "user_id" int\n        |> required "name" (nullable string)\n        |> required "email" string\n')),Object(a.b)("p",null,"For an example that requires a list:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),'Decode.succeed Metadata\n   |> required "description" string\n   |> required "title" string\n   |> required "tagList" (list string)\n   |> required "favorited" bool\n   |> required "favoritesCound" int\n   |> required "createdAt" Timestamp.iso8601Decoder\n')),Object(a.b)("h2",{id:"tuples"},"Tuples"),Object(a.b)("p",null,"Serve the same purpose as records but with field ",Object(a.b)("inlineCode",{parentName:"p"},"positions")," instead of names."),Object(a.b)("p",null,"There is a 3 limit max!"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),'x = Tuple.first (5, 7)\n(name, x, y) = ("foo", 5, 7)\n\nx = { x = 5, y = 7 }.x\n{ name, x, y } = { name = "foo", x = 5, y = 7 }\n')),Object(a.b)("h2",{id:"http-and-interacting-with-servers"},"Http and interacting with servers"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-elm"}),"Http\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Elm/Webmasters-Elm.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-elm-webmasters-elm-md-10507ea432fdb9b64725.js.map