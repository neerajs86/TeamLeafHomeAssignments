import { WebComponent } from "./BaseClass";
export class Button extends WebComponent {
    constructor(selector) {
        super(selector);
    }
    //Override the method
    click() {
        console.log(`Simulating a double click with the selector ${this.selector}`);
    }
}
