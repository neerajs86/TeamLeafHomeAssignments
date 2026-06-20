import { WebComponent } from "./BaseClass";

export class Button extends WebComponent {

constructor(selector : string) {
    super(selector);
}

//Override the method
click() : void {
    console.log(`Simulating a double click with the selector ${this.selector}`);
    }
}