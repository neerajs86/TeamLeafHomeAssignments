import { BasePage } from "./overridingSuperClass";
class LoginPage extends BasePage {
    //Override an super class method
    performCommonTasks() {
        console.log("This is used to Peform common tasks in Sub class");
    }
}
//Execute child class methods using child class object
console.log("*** Execute child class methods using child class object ***");
let childOne = new LoginPage();
childOne.findElement();
childOne.clickElement();
childOne.enterText();
//Call overrided method
childOne.performCommonTasks();
//Execute parent class methods using parent class object
console.log("*** Execute parent class methods using parent class object ***");
let parentOne = new BasePage();
parentOne.findElement();
parentOne.clickElement();
parentOne.enterText();
parentOne.performCommonTasks();
//Execute parent class methods using child class object
console.log("*** Execute parent class methods using child class object ***");
let parentTwo = new LoginPage();
parentTwo.clickElement();
parentTwo.clickElement();
parentTwo.clickElement();
parentTwo.performCommonTasks(); //It prints child class in the console and shows parent class method in UI (Dynamic Polymorphism) 
