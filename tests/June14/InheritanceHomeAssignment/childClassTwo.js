import { WebComponent } from "./BaseClass";
import { Button } from "./childClassOne";
class TextInput extends WebComponent {
    value;
    constructor(selector) {
        super(selector);
        this.value = ""; // Initialize value to an empty string
    }
    enterText(text) {
        console.log(`Value is ${text}`);
    }
}
function testComponents() {
    //Instantiate the class 'Button'
    let loginBtn = new Button("//buton[text()='Login']");
    //Clicking the button
    loginBtn.click();
    //Instantiate the  class 'TextInput'
    let txtInput = new TextInput("[name='username']");
    //Entering text into the text input 
    txtInput.enterText("dilipkumar.rajendran@testleaf.com");
}
testComponents();
