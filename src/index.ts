//In this, we can create different objects of class

import {Item} from './Item';
import { ItemCollection } from './ItemCollection';

//object declaration
let item : Item = new Item(1, "BreakFast", true);
let item2 : Item = new Item(2, "Work");

let itemCollection : ItemCollection = new ItemCollection();


//instance calling
item.printTask();
item2.printTask();

itemCollection.addTodo('Eating Lunch');
itemCollection.taskDone(1);
// itemCollection.printAll()
