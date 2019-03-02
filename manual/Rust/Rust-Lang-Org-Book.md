---
name: Rust Lang Org Book
menu: Rust
---

# Rust Lang Book

Resources for this can be found from [here](https://doc.rust-lang.org/book/foreword.html).

## Hello World

```rust
// main.rs
fn main() {
    println!("Hello, world!");
}
```

Note: `println!` calls a Rust macro. If it called a function instead, it would be entered as println (without the !). For now, you just need to know that using a ! means that you’re calling a macro instead of a normal function.

## Hello Cargo

Cargo is Rust’s build system and package manager. Most Rustaceans use this tool to manage their Rust projects because Cargo handles a lot of tasks for you, such as building your code, downloading the libraries your code depends on, and building those libraries. (We call libraries your code needs dependencies.)

```shell
$ cargo new hello_cargo
$ cd hello_cargo
```

The first command creates a new directory called hello_cargo. We’ve named our project hello_cargo, and Cargo creates its files in a directory of the same name.

Go into the hello_cargo directory and list the files. You’ll see that Cargo has generated two files and one directory for us: a Cargo.toml file and a src directory with a main.rs file inside. It has also initialized a new Git repository along with a .gitignore file.