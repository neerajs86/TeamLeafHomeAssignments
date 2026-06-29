import {test, expect} from"@playwright/test"

test("Login Salesforce app", async ({page})=> {
    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("username").fill("dilipkumar.rajendran@testleaf.com");
    //Enter password
    await page.getByLabel("password").fill("TestLeaf@2025");
    //Click Login button
    await page.locator("[value='Log In']").click();
    await page.waitForTimeout(4000);
    await page.context().storageState({path : "data/sf-storage.json"})
    const localStorageV = await page.evaluate(()=> ({localStorage : {...localStorage}}));
    console.log(localStorageV); 
});