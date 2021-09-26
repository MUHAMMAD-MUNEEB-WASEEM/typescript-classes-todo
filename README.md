## Typescript

TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript

## Benefits of Typescript

It helps you to detect errors while writing code and makes your code well organized and error free

## Creating Project

1. npm init       (to create package.json)
2. src folder     (where all working code or class placed)
3. dist folder    (where transpiled code resides)
4. tsconfig.json  (contains compilation code)

## Creating files in Src folder

1. item.ts             (containes class template)
2. itemCollection.ts   (perform different methods on item)
3. index.ts            (object declaration and instance calling)

## Run Code

**For transpilation**:

* For single file:
  tsc filename.ts
  
* For multiple files as in our case:
  tsc
  
**To get output**:

* For single file:
  node filename.js

* For multiple files like in our case:
  node ./dist/index.js
  

