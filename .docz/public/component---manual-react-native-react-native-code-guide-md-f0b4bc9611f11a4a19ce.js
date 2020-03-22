(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{qkKL:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),a=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React-Native/React-Native-Code-Guide.md"}});var s={_frontmatter:i},c=a.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.b)(c,r({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"react-native-cheat-sheet-using-es6"},"React-Native Cheat Sheet using ES6"),Object(o.b)("h2",{id:"rn-1-importing-from-react"},"RN-1: Importing from React"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"in index.ios.js")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// import from React and React-Native\nimport React, { Component } from 'react';\n\n// required components go here -> check from the docs\nimport { AppRegistry, TabBarIOS, StyleSheet, Text, View } from 'react-native';\n\n// import from your own files\nimport { Featured } from './Featured.js';\nimport { Search } from './Search.js';\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"rn-2-example-classes"},"RN-2: Example classes"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// this is an example class\nclass BookSearch extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      selectedTab: 'featured'\n    };\n  }\n\n  // this is where the view renders\n  render() {\n    return (\n      // JSX commands relate to imports from react-native\n      // {} is where the JSX compiles Javascript\n      <TabBarIOS selectedTab={this.state.selectedTab}>\n        <TabBarIOS.Item\n          title=\"Left Tab\"\n          selected={this.state.selectedTab === 'featured'}\n          icon={{ uri: base64Icon, scale: 3 }}\n          onPress={() => {\n            this.setState({\n              selectedTab: 'featured'\n            });\n          }}\n        >\n          <Featured />\n        </TabBarIOS.Item>\n        <TabBarIOS.Item\n          title=\"Right Tab\"\n          selected={this.state.selectedTab === 'search'}\n          icon={{ uri: base64Icon, scale: 3 }}\n          onPress={() => {\n            this.setState({\n              selectedTab: 'search'\n            });\n          }}\n        >\n          <Search />\n        </TabBarIOS.Item>\n      </TabBarIOS>\n    );\n  }\n}\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"rn-3-registry-for-an-app"},"RN-3: Registry for an App"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"AppRegistry.registerComponent('BookSearch', () => BookSearch);\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"rn-4-debugging---important-things-to-note"},"RN-4: Debugging - Important things to note"),Object(o.b)("p",null,"If the AppRegistry is not working (error regarding App not registered)"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Check all terminal sessions that have used React Native have closed"),Object(o.b)("li",{parentName:"ol"},"Try running the command npm link from the main directory of the project"),Object(o.b)("li",{parentName:"ol"},"Check the moduleName in the AppDelegate.m file in the Xcode Project")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"rn-5-stylesheetcreate"},"RN-5: StyleSheet.create"),Object(o.b)("p",null,"In this example, you can see how the 'const styles' variable is declared and how it is implemented in the render() function."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const styles = StyleSheet.create({\n  description: {\n    fontSize: 20,\n    backgroundColor: 'white'\n  },\n  container: {\n    flex: 1\n  }\n});\n\nclass Search extends Component {\n  render() {\n    return (\n      <NavigatorIOS\n        style={styles.container}\n        initialRoute={{\n          title: 'Search Books',\n          component: SearchBooks\n        }}\n      />\n    );\n  }\n}\n")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"iOS Views")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," ! important ")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<View>")," tags are treated similar to as if they are ",Object(o.b)("inlineCode",{parentName:"p"},"<div>")," tags"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"rn-6-navigation-view"},"RN-6: Navigation View"),Object(o.b)("p",null,"Example: Search.js from the BookSearch project"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"'use strict';\n\nimport React, { Component } from 'react';\nimport { StyleSheet, NavigatorIOS, Text } from 'react-native';\nimport { SearchBooks } from './SearchBooks.js';\n\nconst styles = StyleSheet.create({\n  description: {\n    fontSize: 20,\n    backgroundColor: 'white'\n  },\n  container: {\n    flex: 1\n  }\n});\n\nexport default class Search extends Component {\n  render() {\n    return (\n      <NavigatorIOS\n        style={styles.container}\n        initialRoute={{\n          title: 'Search Books',\n          component: SearchBooks\n        }}\n      />\n    );\n  }\n}\n")),Object(o.b)("h2",{id:"rn-7-uitablecellview-replica-listview"},"RN-7: UITableCellView replica (ListView)"),Object(o.b)("p",null,"BookList.js - taken from BookSearch"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"'use strict';\n\nimport React, { Component } from 'react';\n\nimport {\n  Image,\n  StyleSheet,\n  Text,\n  View,\n  ListView,\n  TouchableHighlight,\n  ActivityIndicatorIOS\n} from 'react-native';\n\nimport { BookDetail } from './BookDetail.js';\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    flexDirection: 'row',\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#F5FCFF',\n    padding: 10\n  },\n  thumbnail: {\n    width: 53,\n    height: 81,\n    marginRight: 10\n  },\n  rightContainer: {\n    flex: 1\n  },\n  title: {\n    fontSize: 20,\n    marginBottom: 8\n  },\n  author: {\n    color: '#656565'\n  },\n  separator: {\n    height: 1,\n    backgroundColor: '#dddddd'\n  },\n  listView: {\n    marginTop: 60,\n    backgroundColor: '#F5FCFF'\n  },\n  loading: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center'\n  }\n});\n\n// the commented out code related to FAKE_BOOK_DATA is how you can stub some data\n\n// const FAKE_BOOK_DATA = [\n//     {volumeInfo: {title: 'The Catcher in the Rye', authors: \"J. D. Salinger\", imageLinks: {thumbnail: 'http://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}}}\n// ];\n\nconst REQUEST_URL =\n  'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';\n\nexport default class BookList extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isLoading: true,\n      dataSource: new ListView.DataSource({\n        rowHasChanged: (row1, row2) => row1 !== row2\n      })\n    };\n  }\n\n  componentDidMount() {\n    // var books = FAKE_BOOK_DATA;\n    // this.setState({\n    //     dataSource: this.state.dataSource.cloneWithRows(books)\n    // });\n    this.fetchData();\n  }\n\n  fetchData() {\n    fetch(REQUEST_URL)\n      .then((response) => response.json())\n      .then((responseData) => {\n        this.setState({\n          dataSource: this.state.dataSource.cloneWithRows(responseData.items),\n          isLoading: false\n        });\n      })\n      .done();\n  }\n\n  render() {\n    // var book = FAKE_BOOK_DATA[0];\n    if (this.state.isLoading) {\n      return this.renderLoadingView();\n    }\n\n    return (\n      <ListView\n        dataSource={this.state.dataSource}\n        renderRow={this.renderBook.bind(this)}\n        style={styles.listView}\n      />\n    );\n  }\n\n  renderLoadingView() {\n    return (\n      <View style={styles.loading}>\n        <ActivityIndicatorIOS size=\"large\" />\n        <Text>Loading books...</Text>\n      </View>\n    );\n  }\n\n  renderBook(book) {\n    return (\n      <TouchableHighlight\n        onPress={() => this.showBookDetail(book)}\n        underlayColor=\"#dddddd\"\n      >\n        <View>\n          <View style={styles.container}>\n            <Image\n              source={{ uri: book.volumeInfo.imageLinks.thumbnail }}\n              style={styles.thumbnail}\n            />\n            <View style={styles.rightContainer}>\n              <Text style={styles.title}>{book.volumeInfo.title}</Text>\n              <Text style={styles.author}>{book.volumeInfo.authors}</Text>\n            </View>\n          </View>\n          <View style={styles.separator} />\n        </View>\n      </TouchableHighlight>\n    );\n  }\n\n  showBookDetail(book) {\n    this.props.navigator.push({\n      title: book.volumeInfo.title,\n      component: BookDetail,\n      passProps: { book }\n    });\n  }\n}\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React-Native/React-Native-Code-Guide.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-native-react-native-code-guide-md-f0b4bc9611f11a4a19ce.js.map