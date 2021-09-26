"use strict";
//In this, we can create different objects of class
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./Item");
const ItemCollection_1 = require("./ItemCollection");
//object declaration
let item = new Item_1.Item(1, "BreakFast", true);
let item2 = new Item_1.Item(2, "Work");
let itemCollection = new ItemCollection_1.ItemCollection();
//instance calling
item.printTask();
item2.printTask();
itemCollection.addTodo('Eating Lunch');
itemCollection.taskDone(1);
// itemCollection.printAll()
