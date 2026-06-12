import {test, chromium, firefox} from "@playwright/test"

test("Red Bus Page", async({})=>{
const browser = await chromium.launch({headless : false, channel: 'msedge'});
const context = await browser.newContext();
const page = await context.newPage();
console.log("Launching Microsoft Edge Browser");
await page.goto("https://www.redbus.in/");
console.log("Title of the page is : " + await page.title());
console.log("URL of the page is : " + page.url());
await page.waitForTimeout(5000);
});

test("Flipkart Page", async({})=>{
const browser = await firefox.launch({headless : false});
const context = await browser.newContext();
const page = await context.newPage();
console.log("Launching Firefox Browser");
await page.goto("https://www.flipkart.com/");
console.log("Title of the page is : " + await page.title());
console.log("URL of the page is : " + page.url());
await page.waitForTimeout(3000);
});