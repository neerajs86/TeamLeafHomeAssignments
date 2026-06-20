"use strict";
class OverloadMethodClass {
    //Define/Create methods
    reportStep(message, status, snap) {
        if (message && status && snap) {
            console.log(`This is a method ${message} as it is ${status} and screenshot showing as ${snap}`);
        }
        else if (message && status) {
            console.log(`This is a method ${message}  it is ${status}`);
        }
        else {
            console.log(`No action required`);
        }
    }
}
let overloadMethod = new OverloadMethodClass();
overloadMethod.reportStep("Working", "Executed", true);
overloadMethod.reportStep("Working", "Executed", false);
overloadMethod.reportStep("Not Working", "Pending");
