export class WebComponent {

    selector : string

    constructor(selector : string) {
        this.selector = selector;
    }

    click() : void {
        console.log(`Simulating a click with the selector ${this.selector}`) ;
    }
    
    focus() : void {
        console.log(`Simulating focusing on the component with the selector ${this.selector}`);
    }
}