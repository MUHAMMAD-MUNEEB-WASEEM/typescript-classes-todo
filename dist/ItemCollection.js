"use strict";
//Collections of items (array)
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const Item_1 = require("./Item");
class ItemCollection {
    //constructor
    constructor(items = []) {
        this.items = items;
        //variable
        this.nextId = 1;
    }
    //methods
    addTodo(task) {
        let item = new Item_1.Item(this.nextId, task, false);
        this.nextId++;
        this.items.push(item);
        item.printTask();
    }
    taskDone(taskId) {
        let item = this.items.find((item) => item.taskId == taskId);
        item.done = true;
        return item.printTask();
    }
    printAll() {
        this.items.forEach((item) => item.printTask());
    }
}
exports.ItemCollection = ItemCollection;
