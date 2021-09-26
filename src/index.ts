//In this, we can create different objects of class

import {Item} from './Item';

//object declaration
let item : Item = new Item(1, "BreakFast", true);
let item2 : Item = new Item(2, "Work");


//instance calling
item.printTask();
item2.printTask();
