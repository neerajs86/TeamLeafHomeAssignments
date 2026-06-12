 import {test, expect} from"@playwright/test"
 
 const authFile = "config/auth.json";

 test("Edit Individuals", async({page})=>{
    //Login steps
    await page.goto("https://login.salesforce.com");
    //Log In with Email
    await page.locator("#gidr-email-log-in-button").click();
    //Enter email
    await page.locator("[name='identifier']").fill("neerajsetiayk22@gmail.com");
    //Click Continue button
    await page.locator("//button[text()='Continue']").click();
    //Enter password
    await page.locator("[name='password']").fill("Test@654leaf");
    await page.waitForTimeout(2000);
    //Click Login button
    await page.locator("//button[text()='Log In']").click();
    await page.waitForTimeout(20000);
    await page.context().storageState({path : authFile});
 });