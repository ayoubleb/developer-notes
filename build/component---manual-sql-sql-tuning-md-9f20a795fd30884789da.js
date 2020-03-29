(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{PTRs:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/SQL/SQL-Tuning.md"}});var l={_frontmatter:r},s=i.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(s,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"sql-tuning"},"SQL Tuning"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#sql-tuning"}),"SQL Tuning"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#resources"}),"Resources")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#quick-understandings"}),"Quick Understandings")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#basic-guide-to-indexing"}),"Basic Guide to indexing")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#writing-sql-queries"}),"Writing SQL queries")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#only-retrieve-the-data-you-need"}),"Only Retrieve The Data You Need")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#limit-your-results"}),"Limit Your Results")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#data-type-conversions"}),"Data type conversions")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#keep-queries-as-simple-as-possible"}),"Keep queries as simple as possible"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#when-you-use-the-or-operator-in-your-query-its-likely-that-youre-not-using-an-index"}),"When you use the ",Object(a.b)("inlineCode",{parentName:"a"},"OR")," operator in your query, it’s likely that you’re not using an index")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#alternatives-to-not"}),"Alternatives to NOT")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#alternatives-to-and"}),"Alternatives to AND")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#alternatives-top-any-and-all-operators"}),"Alternatives top ANY and ALL Operators")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#isolate-columns-in-conditions"}),"Isolate Columns in Conditions")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#joins"}),"JOINS")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#having"}),"HAVING")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#set-based-versus-procedural-approaches-to-querying"}),"Set-based versus Procedural Approaches to Querying")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#exists-vs-count"}),"EXISTS() vs COUNT()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#query-optimisation"}),"Query Optimisation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#explain"}),"EXPLAIN")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#other-scan-algorithms"}),"Other Scan Algorithms")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#time-complexities"}),"Time Complexities"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#o1-constant-time"}),"O(1): Constant Time")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#linear-time-on"}),"Linear Time: O(n)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#logarithmic-time-olog-n"}),"Logarithmic Time: O(log (n))")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#quadratic-time-on2"}),"Quadratic Time: O(n^2)")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#sql-tuning-summary"}),"SQL Tuning Summary"))))),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://www.toptal.com/sql-server/sql-database-tuning-for-developers"}),"SQL DB Tuning for developers")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://www.datacamp.com/community/tutorials/sql-tutorial-query"}),"SQL Tutorial - Querying - DataCamp")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",o({parentName:"li"},{href:"https://intellipaat.com/blog/sql-optimization-techniques/"}),"SQL Optimisation Techniques"))),Object(a.b)("h2",{id:"quick-understandings"},"Quick Understandings"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"What is query processing in a DBMS? Database management systems like SQL Server have to translate the SQL queries you give them into the actual instructions they have to perform to read or change the data in the database. After processing, the database engine then also attempts to automatically optimize the query where possible."),Object(a.b)("li",{parentName:"ol"},"What is query optimization in SQL Server? Query optimization is when a developer, or the database engine, changes a query in such a way that SQL Server is able to return the same results more efficiently. Sometimes it's a simple as using EXISTS() instead of COUNT(), but other times the query needs to be rewritten with a different approach."),Object(a.b)("li",{parentName:"ol"},"What is performance tuning in SQL Server? Performance tuning includes query optimization, SQL client code optimization, database index management, and in another sense, better coordination between developers and DBAs."),Object(a.b)("li",{parentName:"ol"},"What is the use of an index in SQL? An index tracks a targeted subset of a table's data so that selecting and ordering can be done much faster, without the server having to look through every last bit of data for that table."),Object(a.b)("li",{parentName:"ol"},"Why is ",Object(a.b)("inlineCode",{parentName:"li"},"EXISTS()")," faster than ",Object(a.b)("inlineCode",{parentName:"li"},"COUNT()"),"? EXISTS() stops processing as soon as it finds a matching row, whereas COUNT() has to count every row, regardless of whether you actually need that detail in the end.")),Object(a.b)("h2",{id:"basic-guide-to-indexing"},"Basic Guide to indexing"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Basic diagram for structuring queries",src:"https://uploads.toptal.io/blog/image/127624/toptal-blog-image-1543510737731-3f314025b86047a3034060ed3153319d.png"})),Object(a.b)("p",null,"Note that if your tables are constantly hammered by INSERT, UPDATE, and DELETE, you should be careful when indexing — you could end up decreasing performance as all indexes need to be modified after these operations."),Object(a.b)("p",null,"Further, DBAs often drop their SQL indexes before performing batch inserts of million-plus rows to speed up the insertion process. After the batch is inserted, they then recreate the indexes. Remember, however, that dropping indexes will affect every query running in that table; so this approach is only recommended when working with a single, large insertion."),Object(a.b)("h2",{id:"writing-sql-queries"},"Writing SQL queries"),Object(a.b)("p",null,'An ideal starting point is to think of "spots" within your queries where issues might sneak in. And, in general, there are four clauses and keywords where newbies can expect performance issues to occur:'),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"WHERE")," clause"),Object(a.b)("li",{parentName:"ol"},"Any ",Object(a.b)("inlineCode",{parentName:"li"},"INNER JOIN")," or ",Object(a.b)("inlineCode",{parentName:"li"},"LEFT JOIN")," keywords"),Object(a.b)("li",{parentName:"ol"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"HAVING")," clause")),Object(a.b)("h2",{id:"only-retrieve-the-data-you-need"},"Only Retrieve The Data You Need"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'The mindset of "the more data, the better" isn’t one that you should necessarily live by when you’re writing SQL queries: not only do you risk obscuring your insights by getting more than what you actually need, but also your performance might suffer from the fact that your query pulls up too much data.')),Object(a.b)("p",null,"Watch for the SELECT statement, the DISTINCT clause and the LIKE operator."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Keep SELECT as compact as possible")),Object(a.b)("p",null,"In case you have correlated subqueries that have EXISTS, you should try to use a constant in the SELECT statement of that subquery instead of selecting the value of an actual column. This is especially handy when you’re checking the existence only."),Object(a.b)("p",null,"Don't:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT driverslicensenr, name\nFROM Drivers\nWHERE EXISTS\n  (SELECT '1'\n  FROM Fines\n  WHERE fines.driverslicensenr = drivers.driverslicensenr);\n")),Object(a.b)("p",null,"Do:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT driverslicensenr, name\nFROM drivers\nINNER JOIN fines ON fines.driverslicensenr = drivers.driverslicensenr;\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Avoid DISTINCT where possible")),Object(a.b)("p",null,"The SELECT DISTINCT statement is used to return only distinct (different) values. DISTINCT is a clause that you should definitely try to avoid if you can. As you have read in other examples, the execution time only increases if you add this clause to your query. It’s therefore always a good idea to consider whether you really need this DISTINCT operation to take place to get the results that you want to accomplish."),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"When you use the LIKE operator in a query, the index isn’t used if the pattern starts with ",Object(a.b)("inlineCode",{parentName:"li"},"%")," or ",Object(a.b)("inlineCode",{parentName:"li"},"_"))),Object(a.b)("p",null,"It will prevent the database from using an index (if it exists). Of course, from another point of view, you could also argue that this type of query potentially leaves the door open to retrieve too many records that don’t necessarily satisfy your query goal."),Object(a.b)("h2",{id:"limit-your-results"},"Limit Your Results"),Object(a.b)("p",null,"When you cannot avoid filtering down on your SELECT statement, you can consider limiting your results in other ways. Here’s where approaches such as the LIMIT clause and data type conversions come in."),Object(a.b)("p",null,"You can add the LIMIT or TOP clauses to your queries to set a maximum number of rows for the result set."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT TOP 3 *\nFROM Drivers;\n")),Object(a.b)("p",null,"Note that you can further specify the PERCENT, for instance, if you change the first line of the query by SELECT TOP 50 PERCENT ",Object(a.b)("inlineCode",{parentName:"p"},"*"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT driverslicensenr, name\nFROM Drivers\nLIMIT 2;\n")),Object(a.b)("p",null,"Additionally, you can also add the ROWNUM clause, which is equivalent to using LIMIT in your query:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT *\nFROM Drivers\nWHERE driverslicensenr = 123456 AND ROWNUM <= 3;\n")),Object(a.b)("h2",{id:"data-type-conversions"},"Data type conversions"),Object(a.b)("p",null,"You should always use the most efficient, that is, smallest, data types possible. There’s always a risk when you provide a huge data type when a smaller one will be more sufficient."),Object(a.b)("p",null,"However, when you add data type conversion to your query, you only increase the execution time."),Object(a.b)("p",null,"An alternative is to avoid data type conversion as much as possible. Note also here that it’s not always possible to remove or omit the data type conversion from your queries, but that you should definitely aim to be careful in including them and that when you do, you test the effect of the addition before you run the query."),Object(a.b)("h2",{id:"keep-queries-as-simple-as-possible"},"Keep queries as simple as possible"),Object(a.b)("h3",{id:"when-you-use-the-or-operator-in-your-query-its-likely-that-youre-not-using-an-index"},"When you use the ",Object(a.b)("inlineCode",{parentName:"h3"},"OR")," operator in your query, it’s likely that you’re not using an index"),Object(a.b)("p",null,"Remember that an index is a data structure that improves the speed of the data retrieval in your database table, but it comes at a cost: there will be additional writes, and additional storage space is needed to maintain the index data structure. Indexes are used to quickly locate or look up data without having to search every row in a database every time the database table is accessed. Indexes can be created by using one or more columns in a database table."),Object(a.b)("p",null,"Avoid:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT driverslicensenr, name\nFROM Drivers\nWHERE driverslicensenr = 123456\nOR driverslicensenr = 678910\nOR driverslicensenr = 345678;\n")),Object(a.b)("p",null,"Do:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT driverslicensenr, name\nFROM Drivers\nWHERE driverslicensenr IN (123456, 678910, 345678);\n")),Object(a.b)("p",null,"Another alternative is to use two SELECT statements with a UNION. You need to be careful not to unnecessarily use the UNION operation because you go through the same table multiple times. At the same time, you have to realize that when you use a UNION in your query, the execution time will increase. Alternatives to the UNION operation are: reformulating the query in such a way that all conditions are placed in one SELECT instruction, or using an OUTER JOIN instead of UNION."),Object(a.b)("p",null,"Note that questies that do use an ",Object(a.b)("inlineCode",{parentName:"p"},"OR")," statement may likely not be using an index as index lookups aren't always preferred."),Object(a.b)("h3",{id:"alternatives-to-not"},"Alternatives to NOT"),Object(a.b)("p",null,"When your query contains the NOT operator, it’s likely that the index is not used, just like with the OR operator. This will inevitably slow down your query."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT driverslicensenr, name\nFROM Drivers\nWHERE NOT (year > 1980);\n")),Object(a.b)("p",null,"The above will definitely run slower than you would maybe expect, mainly because it’s formulated a lot more complex than it could be: in cases like this one, it’s best to look for an alternative. Consider replacing NOT by comparison operators, such as ",Object(a.b)("inlineCode",{parentName:"p"},">"),", ",Object(a.b)("inlineCode",{parentName:"p"},"<>")," or ",Object(a.b)("inlineCode",{parentName:"p"},"!>"),"; The example above might indeed be rewritten and become something like this:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT driverslicensenr, name\nFROM Drivers\nWHERE year <= 1980;\n")),Object(a.b)("h3",{id:"alternatives-to-and"},"Alternatives to AND"),Object(a.b)("p",null,"The AND operator is another operator that doesn’t make use of the index, and that can slow your query down if used in an overly complex and inefficient way:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT driverslicensenr, name\nFROM Drivers\nWHERE year >= 1960 AND year <= 1980;\n")),Object(a.b)("p",null,"It is better in the above example to use BETWEEN:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT driverslicensenr, name\nFROM Drivers\nWHERE year BETWEEN 1960 AND 1980;\n")),Object(a.b)("h3",{id:"alternatives-top-any-and-all-operators"},"Alternatives top ANY and ALL Operators"),Object(a.b)("p",null,"ANY and ALL prevents use of indexes. Alternatives that will come in handy are aggregative functions ie SUM, AVG, MIN, MAX. Be aware of the fact that all aggregation functions like SUM, AVG, MIN, MAX over many rows can result in a long-running query. In such cases, try to either minimize the number of rows to handle or pre-calculate these values."),Object(a.b)("h3",{id:"isolate-columns-in-conditions"},"Isolate Columns in Conditions"),Object(a.b)("p",null,"In cases where a column is used in a calculation or in a scalar function, the index isn’t used. A possible solution would be to simply isolate the specific column so that it no longer is a part of the calculation or the function."),Object(a.b)("p",null,"Don't:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT driverslicensenr, name\nFROM Drivers\nWHERE year + 10 = 1980;\n")),Object(a.b)("p",null,"Do:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT driverslicensenr, name\nFROM Drivers\nWHERE year = 1970;\n")),Object(a.b)("h2",{id:"joins"},"JOINS"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Order of tables: When you join two tables, you might want to rewrite your query so that the biggest table is placed last in the join."),Object(a.b)("li",{parentName:"ol"},"Redundant Conditions on Joins: When you add too many conditions to your joins, you obligate SQL to choose a particular path. It could be, though, that this path isn’t always the more performant one.")),Object(a.b)("h2",{id:"having"},"HAVING"),Object(a.b)("p",null,"The HAVING clause was initially added to SQL because the WHERE keyword could not be used with aggregate functions. HAVING is typically used with the GROUP BY clause to restrict the groups of returned rows to only those that meet certain conditions. However, if you use this clause in your query, the index is not used, which - as you already know - can result in a query that doesn’t really perform all that well."),Object(a.b)("p",null,"Don't:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT state, COUNT(*)\nFROM Drivers\nGROUP BY state\nHAVING state IN ('GA', 'TX')\nORDER BY state\n")),Object(a.b)("p",null,"Do:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT state, COUNT(*)\nFROM Drivers\nWHERE state IN ('GA', 'TX')\nGROUP BY state\nORDER BY state\n")),Object(a.b)("p",null,"The first query uses the WHERE clause to restrict the number of rows that need to be summed, whereas the second query sums up all the rows in the table and then uses HAVING to throw away the sums it calculated. In these types of cases, the alternative with the WHERE clause is obviously the better one, as you don’t waste any resources."),Object(a.b)("p",null,"You see that this is not about limiting the result set, but instead about limiting the intermediate number of records within a query."),Object(a.b)("p",null,"Note that the difference between these two clauses lies in the fact that the WHERE clause introduces a condition on individual rows, while the HAVING clause introduces a condition on aggregations or results of a selection where a single result, such as MIN, MAX, SUM... has been produced from multiple rows."),Object(a.b)("h2",{id:"set-based-versus-procedural-approaches-to-querying"},"Set-based versus Procedural Approaches to Querying"),Object(a.b)("p",null,"The set-based approach of querying is also the one that most top employers in the data science industry will ask of you to master! You’ll often need to switch between these two types of approaches."),Object(a.b)("p",null,"Note that if you ever find yourself with a procedural query, you should consider rewriting or refactoring it."),Object(a.b)("h2",{id:"exists-vs-count"},"EXISTS() vs COUNT()"),Object(a.b)("p",null,"This SQL optimization technique concerns the use of EXISTS(). If you want to check if a record exists, use EXISTS() instead of COUNT(). While COUNT() scans the entire table, counting up all entries matching your condition, EXISTS() will exit as soon as it sees the result it needs. This will give you better performance and clearer code."),Object(a.b)("p",null,"Don't:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"IF (SELECT COUNT(1) FROM EMPLOYEES WHERE FIRSTNAME LIKE '%JOHN%') > 0\n    PRINT 'YES'\n")),Object(a.b)("p",null,"Do:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"IF EXISTS(SELECT FIRSTNAME FROM EMPLOYEES WHERE FIRSTNAME LIKE '%JOHN%')\n    PRINT 'YES'\n")),Object(a.b)("h2",{id:"query-optimisation"},"Query Optimisation"),Object(a.b)("p",null,"Some tools will be able to provide you with a textual description of the query plan. One example is the EXPLAIN PLAN statement in Oracle, but the name of the instruction varies according to the RDBMS that you’re working with. Elsewhere, you might find EXPLAIN (MySQL, PostgreSQL) or EXPLAIN QUERY PLAN (SQLite)."),Object(a.b)("p",null,"Note that if you’re working with PostgreSQL, you make the difference between EXPLAIN, where you just get a description that states the idea of how the planner intends to execute the query without running it, while EXPLAIN ANALYZE actually executes the query and returns to you an analysis of the expected versus actual query plans. Generally speaking, a real execution plan is one where you actually run the query, whereas an estimated execution plan works out what it would do without executing the query."),Object(a.b)("h2",{id:"explain"},"EXPLAIN"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"EXPLAIN\nSELECT *\nFROM one_million;\n\nQUERY PLAN\n____________________________________________________\nSeq Scan on one_million\n(cost=0.00..18584.82 rows=1025082 width=36)\n(1 row)\n")),Object(a.b)("p",null,"You see that the cost of the query is ",Object(a.b)("inlineCode",{parentName:"p"},"0.00..18584.82")," and that the number of rows is ",Object(a.b)("inlineCode",{parentName:"p"},"1025082"),". The width of number of columns is then ",Object(a.b)("inlineCode",{parentName:"p"},"36"),"."),Object(a.b)("p",null,"You can then renew your statistical information with the help of ANALYZE."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"ANALYZE one_million;\nEXPLAIN\nSELECT *\nFROM one_million;\n\nQUERY PLAN\n____________________________________________________\nSeq Scan on one_million\n(cost=0.00..18334.00 rows=1000000 width=37)\n(1 row)\n")),Object(a.b)("p",null,"Retrieving the actual execution time:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"EXPLAIN ANALYZE\nSELECT *\nFROM one_million;\n\nQUERY PLAN\n___________________________________________________________\nSeq Scan on one_million\n(cost=0.00..18334.00 rows=1000000 width=37)\n(actual time=0.015..1207.019 rows=1000000 loops=1)\nTotal runtime: 2320.146 ms\n(2 rows)\n")),Object(a.b)("p",null,"Up until now, all the algorithms you have seen is the Seq Scan (Sequential Scan) or a Full Table Scan: this is a scan made on a database where each row of the table under scan is read in a sequential (serial) order, and the columns that are found are checked for whether they fulfill a condition or not. Concerning performance, the Sequential Scan is definitely not the best execution plan out there because you’re still doing a full table scan. However, it’s not too bad when the table doesn’t fit into memory: sequential reads go quite fast even with slow disks."),Object(a.b)("h2",{id:"other-scan-algorithms"},"Other Scan Algorithms"),Object(a.b)("p",null,"There will also be index scan, hash join, merge join."),Object(a.b)("p",null,"NOTE: Even though the following examples say that ",Object(a.b)("inlineCode",{parentName:"p"},"Hash Join")," happens without an index and ",Object(a.b)("inlineCode",{parentName:"p"},"Merge Join")," with, my tests on DB Fiddle say the opposite happens. It makes more sense to me if a hash join is used for an index given how hash maps would work."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"EXPLAIN ANALYZE\nSELECT *\nFROM one_million JOIN half_million\nON (one_million.counter=half_million.counter);\nQUERY PLAN\n_________________________________________________________________\nHash Join (cost=15417.00..68831.00 rows=500000 width=42)\n(actual time=1241.471..5912.553 rows=500000 loops=1)\nHash Cond: (one_million.counter = half_million.counter)\n    -> Seq Scan on one_million\n    (cost=0.00..18334.00 rows=1000000 width=37)\n    (actual time=0.007..1254.027 rows=1000000 loops=1)\n    -> Hash (cost=7213.00..7213.00 rows=500000 width=5)\n    (actual time=1241.251..1241.251 rows=500000 loops=1)\n    Buckets: 4096 Batches: 16 Memory Usage: 770kB\n    -> Seq Scan on half_million\n    (cost=0.00..7213.00 rows=500000 width=5)\n(actual time=0.008..601.128 rows=500000 loops=1)\nTotal runtime: 6468.337 ms\n")),Object(a.b)("p",null,"You see that the query optimizer chose for a Hash Join here! Remember this operation, as you’ll need this to estimate the time complexity of your query. For now, note that there is no index on half_million.counter, which you could add in the next example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"CREATE INDEX ON half_million(counter);\nEXPLAIN ANALYZE\nSELECT *\nFROM one_million JOIN half_million\nON (one_million.counter=half_million.counter);\nQUERY PLAN\n________________________________________________________________\nMerge Join (cost=4.12..37650.65 rows=500000 width=42)\n(actual time=0.033..3272.940 rows=500000 loops=1)\nMerge Cond: (one_million.counter = half_million.counter)\n    -> Index Scan using one_million_counter_idx on one_million\n    (cost=0.00..32129.34 rows=1000000 width=37)\n    (actual time=0.011..694.466 rows=500001 loops=1)\n    -> Index Scan using half_million_counter_idx on half_million\n    (cost=0.00..14120.29 rows=500000 width=5)\n(actual time=0.010..683.674 rows=500000 loops=1)\nTotal runtime: 3833.310 ms\n(5 rows)\n")),Object(a.b)("p",null,"By creating the index, the query optimizer has now decided to go for a ",Object(a.b)("inlineCode",{parentName:"p"},"Merge join")," where ",Object(a.b)("inlineCode",{parentName:"p"},"Index Scans")," are happening."),Object(a.b)("p",null,'Note the difference between the index scan and the full table scan or sequential scan: the former, which is also called "table scan", scans the data or index pages to find the appropriate records, while the latter scans each row of the table.'),Object(a.b)("h2",{id:"time-complexities"},"Time Complexities"),Object(a.b)("p",null,"Note, though, that there are different types of indexes, different execution plans and different implementations for various databases to consider, so that the time complexities listed below are very general and can vary according to your specific setting."),Object(a.b)("h3",{id:"o1-constant-time"},"O(1): Constant Time"),Object(a.b)("p",null,"An algorithm is said to run in constant time if it requires the same amount of time regardless of the input size. When you’re talking about a query, it will run in constant time if it requires the same amount of time irrespective of the table size."),Object(a.b)("p",null,"These type of queries are not really common, yet here’s one such an example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT TOP 1 t.*\nFROM t\n")),Object(a.b)("p",null,"The time complexity is constant because you select one arbitrary row from the table. Therefore, the length of the time should be independent of the size of the table."),Object(a.b)("h3",{id:"linear-time-on"},"Linear Time: O(n)"),Object(a.b)("p",null,"An algorithm is said to run in linear time if its time execution is directly proportional to the input size, i.e. time grows linearly as input size increases. For databases, this means that the time execution would be directly proportional to the table size: as the number of rows in the table grows, the time for the query grows."),Object(a.b)("p",null,"An example is a query with a WHERE clause on a un-indexed column: a full table scan or Seq Scan will be needed, which will result in a time complexity of ",Object(a.b)("inlineCode",{parentName:"p"},"O(n)"),". This means that every row needs to be read to find the one with the right ID. You don’t have a limit at all, so every row does need to be read, even if the first row matches the condition."),Object(a.b)("p",null,"Consider also the following example of a query that would have a complexity of ",Object(a.b)("inlineCode",{parentName:"p"},"O(n)")," if there’s no index on i_id:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT i_id\nFROM item;\n")),Object(a.b)("p",null,"The previous also means that other queries, such as count queries like ",Object(a.b)("inlineCode",{parentName:"p"},"COUNT(*) FROM TABLE;")," will have a time complexity of O(n), because a full table scan will be required unless the total row count is stored for the table. Then, the complexity would be more like ",Object(a.b)("inlineCode",{parentName:"p"},"O(1)"),"."),Object(a.b)("p",null,"Closely related to the linear execution time is the execution time for execution plans that have joins in them. Here are some examples:"),Object(a.b)("p",null,"A hash join has an expected complexity ",Object(a.b)("inlineCode",{parentName:"p"},"O(M + N)"),". The classic hash join algorithm for an inner join of two tables first prepares a hash table of the smaller table. The hash table entries consist of the join attribute and its row. The hash table is accessed by applying a hash function to the join attribute. Once the hash table is built, the larger table is scanned and the relevant rows from the smaller table are found by looking in the hash table."),Object(a.b)("p",null,"Merge joins generally have a complexity of ",Object(a.b)("inlineCode",{parentName:"p"},"O(M+N)")," but it will heavily depend on the indexes on the join columns and, in cases where there is no index, on whether the rows are sorted according to the keys used in the join:"),Object(a.b)("p",null,"If both tables that are sorted according to the keys that are being used in the join, then the query will have a time complexity of ",Object(a.b)("inlineCode",{parentName:"p"},"O(M+N)"),"."),Object(a.b)("p",null,"If both tables have an index on the joined columns, then the index already maintains those columns in order, and there’s no need to sort. The complexity will be ",Object(a.b)("inlineCode",{parentName:"p"},"O(M + N)"),".\nIf neither table has an index on the joined columns, a sort of both tables will need to happen first so that the complexity will look more like ",Object(a.b)("inlineCode",{parentName:"p"},"O(M log M + N log N)"),".\nIf only one of the tables has an index on the joined columns, only the one table that doesn’t have the index will need to be sorted before the merge step can happen so that the complexity will look like ",Object(a.b)("inlineCode",{parentName:"p"},"O(M + N log N)"),"."),Object(a.b)("p",null,"For nested joins, the complexity is generally ",Object(a.b)("inlineCode",{parentName:"p"},"O(MN)"),". This join is efficient when one or both of the tables are extremely small (for example, smaller than 10 records), which is a very common situation when evaluating queries because some subqueries are written to return only one row."),Object(a.b)("p",null,"Remember: a nested join is a join that compares every record in one table against every record in the other."),Object(a.b)("h3",{id:"logarithmic-time-olog-n"},"Logarithmic Time: O(log (n))"),Object(a.b)("p",null,"An algorithm is said to run in logarithmic time if its time execution is proportional to the logarithm of the input size; For queries, this means that they will run if the execution time is proportional to the logarithm of the database size."),Object(a.b)("p",null,"This logarithmic time complexity is true for query plans where an Index Scan or clustered index scan is performed. A clustered index is an index where the leaf level of the index contains the actual data rows of the table. A clustered is much like any other index: it is defined on one or more columns. These form the index key. The clustering key is then the key columns of a clustered index. A clustered index scan is then basically the operation of your RDBMS reading through for the row or rows from top to bottom in the clustered index."),Object(a.b)("p",null,"Consider the following query example, where the there’s an index on i_id and which would generally result in a complexity of ",Object(a.b)("inlineCode",{parentName:"p"},"O(log(n))"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT i_stock\nFROM item\nWHERE i_id = N;\n")),Object(a.b)("p",null,"Note that without the index, the time complexity would have been O(n)."),Object(a.b)("h3",{id:"quadratic-time-on2"},"Quadratic Time: O(n^2)"),Object(a.b)("p",null,"An algorithm is said to run in quadratic time if its time execution is proportional to the square of the input size. Once again, for databases, this means that the execution time for a query is proportional to the square of the database size."),Object(a.b)("p",null,"A possible example of a query with quadratic time complexity is the following one:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT *\nFROM item, author\nWHERE item.i_a_id=author.a_id\n")),Object(a.b)("p",null,"The minimum complexity would be ",Object(a.b)("inlineCode",{parentName:"p"},"O(n log(n))"),", but the maximum complexity could be ",Object(a.b)("inlineCode",{parentName:"p"},"O(n^2)"),", based on the index information of the join attributes."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Big-O Complexity Chart",src:"http://community.datacamp.com.s3.amazonaws.com/community/production/ckeditor_assets/pictures/672/content_bigo.png"})),Object(a.b)("h2",{id:"sql-tuning-summary"},"SQL Tuning Summary"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Replace unnecessary large-table full table scans with index scans."),Object(a.b)("li",{parentName:"ol"},"Make sure that you’re applying the optimal table join order."),Object(a.b)("li",{parentName:"ol"},"Make sure that you’re using the indexes optimally; and"),Object(a.b)("li",{parentName:"ol"},"Cache small-table full table scans.")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/SQL/SQL-Tuning.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-sql-sql-tuning-md-9f20a795fd30884789da.js.map