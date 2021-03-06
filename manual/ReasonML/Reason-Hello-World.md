---
menu: ReasonML
name: ReasonML Hello World
---

# ReasonML Hello World

## tl;dr

Reason comes by default with `BuckleScript`.

```shell
npm install -g bs-platform
bsb -init my-new-project -theme basic-reason
cd my-new-project
yarn build # or npm run build, for npm
node src/Demo.bs.js
```

## Let Binding

| JavaScript              | Reason                         |
| ----------------------- | ------------------------------ |
| `const x = 5;`          | `let x = 5;`                   |
| `var x = y;`            | No equivalent (thankfully)     |
| `let x = 5; x = x + 1;` | `let x = ref(5); x := x^ + 1;` |

## String & Char

| JavaScript             | Reason                |
| ---------------------- | --------------------- |
| `"Hello world!"`       | Same                  |
| `'Hello world!'`       | Strings must use `"`  |
| Characters are strings | `'a'`                 |
| `"hello " + "world"`   | `"hello " ++ "world"` |

## Boolean

| JavaScript                           | Reason                                         |
| ------------------------------------ | ---------------------------------------------- |
| `true`, `false`                      | Same                                           |
| `!true`                              | Same                                           |
| `||`, `&&`, `<=`, `>=`, `<`, `>`     | Same                                           |
| `a === b`, `a !== b`                 | Same                                           |
| No deep equality (recursive compare) | `a == b`, `a != b`                             |
| `a == b`                             | No equality with implicit casting (thankfully) |

## Number

| JavaScript  | Reason       |
| ----------- | ------------ |
| `3`         | Same         |
| `3.1415`    | Same         |
| `3 + 4`     | Same         |
| `3.0 + 4.5` | `3.0 +. 4.5` |
| `5 % 3`     | `5 mod 3`    |

\* JS has no distinction between integer and float.

## Object/Record

| JavaScript          | Reason                                  |
| ------------------- | --------------------------------------- |
| no static types     | `type point = {x: int, mutable y: int}` |
| `{x: 30, y: 20}`    | Same                                    |
| `point.x`           | Same                                    |
| `point.y = 30;`     | Same                                    |
| `{...point, x: 30}` | Same                                    |

\* This is the Reason spiritual equivalent; it doesn't mean it compiles to JS' object! To compile to the latter, see [here](object.md#tip-tricks).

## Array

| JavaScript            | Reason             |
| --------------------- | ------------------ |
| `[1, 2, 3]`           | `[|1, 2, 3|]`      |
| `myArray[1] = 10`     | Same               |
| `[1, "Bob", true]` \* | `(1, "Bob", true)` |
| No immutable list     | `[1, 2, 3]`        |

\* We can simulate tuples in JavaScript with arrays, because JavaScript arrays can contain multiple types of elements.

## Null

| JavaScript          | Reason    |
| ------------------- | --------- |
| `null`, `undefined` | `None` \* |

\* Again, only a spiritual equivalent; Reason doesn't have nulls, nor null bugs! But it does have [an option type](newcomer-examples.md#using-the-option-type) for when you actually need nullability.

## Function

| JavaScript                      | Reason                     |
| ------------------------------- | -------------------------- |
| `arg => retVal`                 | `(arg) => retVal`          |
| `function named(arg) {...}`     | `let named = (arg) => ...` |
| `const f = function(arg) {...}` | `let f = (arg) => ...`     |
| `add(4, add(5, 6))`             | Same                       |

### Blocks

JavaScript:

```javascript
const myFun = (x, y) => {
  const doubleX = x + x;
  const doubleY = y + y;
  return doubleX + doubleY;
};
```

Reason:

```reason
let myFun = (x, y) => {
  let doubleX = x + x;
  let doubleY = y + y;
  doubleX + doubleY
};
```

### Currying

| JavaScript                  | Reason                      |
| --------------------------- | --------------------------- |
| `let add = a => b => a + b` | `let add = (a, b) => a + b` |

Both JavaScript and Reason support currying, but Reason currying is **built-in and optimized to avoid intermediate function allocation & calls**, whenever possible.

## If-else

| JavaScript            | Reason                                             |
| --------------------- | -------------------------------------------------- |
| `if (a) {b} else {c}` | Same \*                                            |
| `a ? b : c`           | Same                                               |
| `switch`              | `switch` but [super-powered!](pattern-matching.md) |

\* Reason conditionals are always expressions!

## Destructuring

| JavaScript                    | Reason                      |
| ----------------------------- | --------------------------- |
| `const {a, b} = data`         | `let {a, b} = data`         |
| `const [a, b] = data`         | `let [|a, b|] = data`       |
| `const {a: aa, b: bb} = data` | `let {a: aa, b: bb} = data` |

\* Gives good compiler warning that `data` might not be of length 2. Switch to pattern-matching instead.

## Loop

| JavaScript                            | Reason                         |
| ------------------------------------- | ------------------------------ |
| `for (let i = 0; i <= 10; i++) {...}` | `for (i in 0 to 10) {...}`     |
| `for (let i = 10; i >= 0; i--) {...}` | `for (i in 10 downto 0) {...}` |
| `while (true) {...}`                  | Same                           |

## JSX

| JavaScript                             | Reason                   |
| -------------------------------------- | ------------------------ |
| `<Foo bar=1 baz="hi" onClick={bla} />` | Same                     |
| `<Foo bar=bar />`                      | `<Foo bar />` \*         |
| `<input checked />`                    | `<input checked=true />` |
| No children spread                     | `<Foo>...children</Foo>` |

\* Argument punning!

## Exception

| JavaScript                                | Reason                    |
| ----------------------------------------- | ------------------------- |
| `throw new SomeError(...)`                | `raise(SomeError(...))`   |
| `try {a} catch (Err) {...} finally {...}` | `try (a) { | Err => ...}` |

\* No finally.

## Blocks

In Reason, "sequence expressions" are created with `{}` and evaluate to their last statement. In JavaScript, this can be simulated via an immediately-invoked function expression (since function bodies have their own local scope).

JavaScript:

```javascript
const myFun = (x, y) => {
  const doubleX = x + x;
  const doubleY = y + y;
  return doubleX + doubleY;
};
```

Reason:

```reason
let myFun = (x, y) => {
  let doubleX = x + x;
  let doubleY = y + y;
  doubleX + doubleY
};
```

## Comments

| JavaScript        | Reason      |
| ----------------- | ----------- |
| `/* Comment */`   | Same        |
| `// Line comment` | Coming soon |
