    import {test, expect} from"@playwright/test"

//Valid Login with correct credentials and verify home page
test("Login LeafTap", async({page})=>{
    await page.goto("https://leaftaps.com/opentaps");
    //Enter username
    await page.locator("#username").fill("democsr");
    //Enter password
    await page.locator("#password").fill("crmsfa");
    //Click Login button
    await page.locator("[value='Login']").click();
    //CLick CRM/SFA button
    await page.locator("#button").click();
    //Verify My Home tab
    expect(await page.locator("//a[text()='My Home']").innerText()).toBe("My Home");
    console.log("Pass");
});


//Invalid Login with incorrect password using 'test.fail()'
test.fail("Invalid Login LeafTap", async({page})=>{
    await page.goto("https://leaftaps.com/opentaps");
    //Enter username
    await page.locator("#username").fill("democsr");
    //Enter password
    await page.locator("#password").fill("crmsf");
    //Click Login button
    await page.locator("[value='Login']").click();
    await expect(page.locator("#errorDiv")).toBeVisible();
});


//Incomplete Login w/o login button using 'test.fixme()'
test.fixme("Incomplete Login LeafTap", async({page})=>{
    await page.goto("https://leaftaps.com/opentaps");
    //Enter username
    await page.locator("#username").fill("democsr");
    //Enter password
    await page.locator("#password").fill("crmsf");
    //Incomplete flow
    await page.close();
});


//Optional login using 'test.skip()'
test.skip("Optional Login LeafTap", async({page, browserName})=>{
    await page.goto("https://leaftaps.com/opentaps");
    //Enter username
    await page.locator("#username").fill("democsr");
    //Enter password
    await page.locator("#password").fill("crmsfa");
    //Click Login button
    await page.locator("[value='Login']").click();
    //CLick CRM/SFA button
    await page.locator("#button").click();
    //Verify My Home tab
    expect(await page.locator("//a[text()='My Home']").innerText()).toBe("My Home");
});
//Optional login and skipped if browser engine is chromium using 'test.skip() condition'
test("Optional Login LeafTap using skip condition", async({page, browserName})=>{
    test.skip(browserName === "chromium", "skipped if browser engine is chromium")
    await page.goto("https://leaftaps.com/opentaps");
    //Enter username
    await page.locator("#username").fill("democsr");
    //Enter password
    await page.locator("#password").fill("crmsfa");
    //Click Login button
    await page.locator("[value='Login']").click();
    //CLick CRM/SFA button
    await page.locator("#button").click();
    //Verify My Home tab
    expect(await page.locator("//a[text()='My Home']").innerText()).toBe("My Home");
});