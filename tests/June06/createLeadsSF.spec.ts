import {test, expect} from '@playwright/test'

 const authFile = "config/auth.json";
 const lastName = "Setia1";
 const companyName = "TestLeaf";

test("Create Individuals", async({browser})=>{
const context = await browser.newContext({storageState : authFile});
const page = await context.newPage();
await page.goto("https://orgfarm-636e9c6675-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome");
//Click App Launcher icon
await page.getByTitle("App Launcher").click();
//Click View All Applications link
await page.getByLabel("View All Applications").click();
//Click Leads link
await page.locator("//p[text()='Leads']").click();
//Click New button
await page.locator("[name='New']").click();
//Click Saluation dropdown and select an option
await page.locator("[name='salutation']").click();
await page.getByTitle("Mr.").click();
//Enter Last Name
await page.getByPlaceholder("Last Name").fill(lastName);
//Enter Company Name
await page.locator("[name='Company']").fill(companyName)
//Click Save button
await page.locator("[name='SaveEdit']").click();

//Verify Last name
const leadTxt = await page.locator("[slot='primaryField']").innerText();
expect(leadTxt).toContain(lastName);
});