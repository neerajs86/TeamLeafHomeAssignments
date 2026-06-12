let runTests = function () {
    switch(testType) {
        case 'smoke':
            console.log("Running smoke tests...");
            break;
        case 'sanity':
            console.log("Running sanity tests...");
            break;
        case 'regression':
            console.log("Running regression tests...");
            break;
        default:
            console.log("Default case is smoke. So, please select valid test type.");
    }
}

var testType = 'smoke';
runTests();
