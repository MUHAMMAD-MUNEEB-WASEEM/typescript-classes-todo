//Collections of items (array)

import { Item } from "./Item";

export class ItemCollection {

    //variable
    private nextId = 1;

    //constructor
    public constructor(public items: Item[] = []){

    }

    //methods
    public addTodo(task:string):void{
        let item:Item = new Item(this.nextId, task, false);
        this.nextId++;
        this.items.push(item);
        item.printTask();
    }

    public taskDone(taskId:number):void{
        let item:Item = this.items.find((item)=> item.taskId==taskId);
        item.done = true;
        return item.printTask();

    }

    public printAll():void{
        this.items.forEach((item)=>item.printTask());
    }




}