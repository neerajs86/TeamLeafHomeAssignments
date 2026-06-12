const browserVersion = "Chrome";

function getBrowserVersionUsingVar() {
    if(browserVersion === "Chrome") {
        var browserVersionVar = "Google Chrome Version 149.0.7827.54";
    }
    console.log("Browser Version putside the block : " + browserVersionVar);
}
getBrowserVersionUsingVar();

function getBrowserVersionUsingLet() {
    if(browserVersion === "Chrome") {
        let browserVersionLet = "Google Chrome Version 149.0.7827.54";
    }
    console.log("Browser Version putside the block : " + browserVersionLet);
}
getBrowserVersionUsingLet();