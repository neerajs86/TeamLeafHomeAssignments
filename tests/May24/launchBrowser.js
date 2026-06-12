function launchBrowser(browserName) {
    if (browserName === 'chrome') {
        console.log('Launching Chrome browser');
    }
    else {
        console.log('Launching Firefox/Edge browser');
    }
}
const myBrowser = 'firefox';
launchBrowser(myBrowser);