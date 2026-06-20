export class WebComponent {
    selector;
    constructor(selector) {
        this.selector = selector;
    }
    click() {
        console.log(`Simulating a click with the selector ${this.selector}`);
    }
    focus() {
        console.log(`Simulating focusing on the component with the selector ${this.selector}`);
    }
}
