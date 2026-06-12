import {test, expect} from"@playwright/test"

test("Create Lead", async({page})=>{
    //Login into CRM App
    await page.goto("https://leaftaps.com/opentaps/control/login");
    await page.locator(`//input[@name='USERNAME']`).fill('democsr');
    const labelContent =await page.locator(`//p[@class='top']/label`).innerText();
    console.log(labelContent);
    await page.locator(`(//input[@class='inputLogin'])[2]`).fill('crmsfa')
    await page.locator(`//input[contains(@class,'Submit')]`).click();

    //Click CRM
    await page.locator('//a[contains(text(),"CRM")]').click();
    //Click Leads tab
    await page.locator('//a[text()="Leads"]').click(); 
    //Click Find Lead link
    await page.locator('//a[text()="Find Leads"]').click();

    //Click First lead
    await page.locator("//a[contains(@href,'/crmsfa/control/viewLead?partyId')]").first().click();
    //Click Edit button
    await page.locator("//a[text()='Edit']").click();

    const annualR = "654321";
    const departmentN = "Engineer [Edit]";
    const companyN = "TestLeaf [Edit]";
    const descp = "Testing purpose. [Edit]";

    //Enter the value in fields to create a lead
    await page.locator("#updateLeadForm_companyName").fill(companyN);
    await page.locator("#updateLeadForm_departmentName").fill(departmentN);
    await page.locator("#updateLeadForm_annualRevenue").fill(annualR);
    await page.locator("#updateLeadForm_description").fill(descp);
    await page.locator("[value='Update']").click();
    await page.waitForTimeout(2000);

    //Assertions Locators
    const companyName = page.locator("#viewLead_companyName_sp");
    const departmentName = page.locator("#viewLead_departmentName_sp");
    const annualRevenue = page.locator("#viewLead_annualRevenue_sp");
    const description = page.locator("#viewLead_description_sp");
     
    //Non-retrying Assertion to mandate fields
    expect(await companyName.innerText()).toContain(companyN);
    expect(await departmentName.innerText()).toBe(departmentN);
    expect(await annualRevenue.innerText()).not.toBe(annualR);
    expect(await description.innerText()).toBe(descp);

    //Auto retrying Assertion to mandate fields
    await expect(companyName).toContainText(companyN);
    await expect(departmentName).toContainText(departmentN);
    await expect(annualRevenue).not.toContainText(annualR);
    await expect(description).toContainText(descp);

})