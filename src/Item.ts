//Class template

export class Item {

    //************************************************************************************** *

    //First and old MEthod

    // variables with types

    // taskId : number;
    // task: string;
    // done: boolean;

    // contructor

    // public constructor(taskId:number, task: string, done:boolean = false){
    //    this.taskId = taskId;
    //    this.task = task;
    //      this.done = done
    //  }

    //************************************************************************************** *

    //New synthetic sugar method

    public constructor(public taskId: number, public task: string, public done:boolean = false){

        //automatic attributes and transpiler code generates here

    }

    //methods

    public printTask():void {
        console.log(`Task Id = ${this.taskId}, Task = ${this.task}, Completed = ${this.done}`)
    }

    
}