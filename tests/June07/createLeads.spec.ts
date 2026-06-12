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
    //Click Create Lead link
    await page.locator('//a[text()="Create Lead"]').click();

    const fName = "Neeraj1";
    const lName = "Setia1";
    const companyN = "TestLeaf";
    const statusA = "Assigned";

    //Enter the value in fields to create a lead
    await page.locator("#createLeadForm_companyName").fill(companyN);
    await page.locator("#createLeadForm_firstName").fill(fName);
    await page.locator("#createLeadForm_lastName").fill(lName);
    await page.locator("#createLeadForm_personalTitle").fill("Mr.");
    await page.locator("#createLeadForm_generalProfTitle").fill("Tester");
    await page.locator("#createLeadForm_departmentName").fill("Engineering");
    await page.locator("#createLeadForm_annualRevenue").fill("3737732");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210");
    await page.locator("[value='Create Lead']").click();
    await page.waitForTimeout(2000);

    //Assertions Locators
    const companyName = page.locator("#viewLead_companyName_sp");
    const firstName = page.locator("#viewLead_firstName_sp");
    const lastName = page.locator("#viewLead_lastName_sp");
    const status = page.locator("#viewLead_statusId_sp");
     
    //Non-retrying Assertion to mandate fields
    expect(await companyName.innerText()).toContain(companyN);
    expect(await firstName.innerText()).toBe(fName);
    expect(await lastName.innerText()).toBe(lName);
    expect(await status.innerText()).toBe(statusA);

    //Auto retrying Assertion to mandate fields
    await expect(companyName).toContainText(companyN);
    await expect(firstName).toContainText(fName);
    await expect(lastName).toContainText(lName);
    await expect(status).toContainText(statusA);

})